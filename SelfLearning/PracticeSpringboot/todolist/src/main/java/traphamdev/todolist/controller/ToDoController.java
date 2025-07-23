package traphamdev.todolist.controller;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import traphamdev.todolist.model.TodoContent;
import traphamdev.todolist.repository.TodoRepository;

import java.util.List;
@RestController
@RequestMapping("/api/todolist")
public class ToDoController {

    private final TodoRepository todoRepository;

    public ToDoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @GetMapping
    public List<TodoContent> getTodoList() {
        return todoRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<TodoContent> createTodo(@Valid @RequestBody TodoContent todoContent) {
        TodoContent saved = todoRepository.save(todoContent);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        if (!todoRepository.existsById(id)) return ResponseEntity.notFound().build();
        todoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<TodoContent> update(@PathVariable Integer id, @RequestBody TodoContent data) {
        return todoRepository.findById(id)
                .map(existing -> {
                    existing.setTitle(data.getTitle());
                    existing.setComplete(data.isComplete());
                    todoRepository.save(existing);
                    return ResponseEntity.ok(existing);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}

