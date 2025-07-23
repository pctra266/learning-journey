package traphamdev.todolist.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import traphamdev.todolist.model.TodoContent;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<TodoContent,Integer> {

}
