package traphamdev.todolist.model;

public class TodoContent {
    private int id;
    private String title;
    private boolean isComplete;


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
}
