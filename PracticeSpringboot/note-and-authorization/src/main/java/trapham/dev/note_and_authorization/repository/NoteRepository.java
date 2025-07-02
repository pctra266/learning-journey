package trapham.dev.note_and_authorization.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import trapham.dev.note_and_authorization.model.Note;

@Repository
public interface NoteRepository extends JpaRepository<Note,Integer> {
}
