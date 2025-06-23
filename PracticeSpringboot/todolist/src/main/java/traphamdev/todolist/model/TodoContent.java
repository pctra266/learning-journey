package traphamdev.todolist.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.lang.NonNull;

@Entity
@Table(name="ToDoContent")
public class TodoContent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank()
    @Size(min = 3, max = 100)
    private String title;
    private boolean isComplete;

    public TodoContent() {}


    public TodoContent(int id, String title) {
        this.id = id;
        this.title = title;
        this.isComplete = false;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public boolean isComplete() {
        return isComplete;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setComplete(boolean complete) {
        isComplete = complete;
    }

    public void setId(int id) {
        this.id = id;
    }
}
