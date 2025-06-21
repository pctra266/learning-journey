package traphamdev.todolist.repository;

import org.springframework.stereotype.Repository;
import traphamdev.todolist.model.TodoContent;

import java.util.ArrayList;
import java.util.List;

@Repository
public class TodoRepository {
    private List<TodoContent> todoList = new ArrayList<>();;

    public TodoRepository() {
        todoList.add(new TodoContent(1, "Learn Spring Boot"));
        todoList.add(new TodoContent(2, "Build a ToDo App"));
    }

    public List<TodoContent> getAll(){
        return todoList;
    }
    public void save(TodoContent todoContent){
        todoList.add(todoContent);
    }

    public void update(int id, TodoContent todoContent){
        TodoContent oldTodoContent = findTodoById(id);
        if(oldTodoContent != null){
            oldTodoContent.setComplete(todoContent.isComplete());
            oldTodoContent.setTitle(todoContent.getTitle());
        }
    }

    public void deleteTodo(int id){
        TodoContent todoContent = findTodoById(id);
        if(todoContent != null){
            todoList.remove(todoContent);
        }
    }
    public TodoContent findTodoById(int id){
        return todoList.stream().filter(x -> x.getId() == id).findFirst().orElse(null);
    }

}
