package traphamdev.todolist.controller;

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

    @GetMapping()
    public List<TodoContent> getTodoList(){
        return todoRepository.getAll();
    }

    @DeleteMapping("/{id}")
    public void deleteTodoById(@PathVariable int id){
        todoRepository.deleteTodo(id);
    }
    @PostMapping()
    public void createTodo(@RequestBody TodoContent todoContent){
        todoRepository.save(todoContent);
    }
    @PutMapping("/{id}")
    public void updateTodoById(@PathVariable int id, @RequestBody TodoContent todoContent){
        todoRepository.update(id, todoContent);
    }

}
