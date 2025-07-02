package trapham.dev.note_and_authorization.controller;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import trapham.dev.note_and_authorization.model.Note;
import trapham.dev.note_and_authorization.repository.NoteRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/note")
public class NoteController {
    private final NoteRepository noteRepository;

    public NoteController(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }
    @GetMapping()
    public List<Note> getAllNote(){
        return noteRepository.findAll();
    }
    @PostMapping()
    public void CreateNote(@Valid @RequestBody Note note){
        System.out.println(note);
        noteRepository.save(note);
    }

    @PutMapping("/{id}")
    public void updateNote( @PathVariable Integer id,@Valid @RequestBody Note note) {
        noteRepository.findById(id).ifPresent(x->{
            x.setTitle(note.getTitle());
            x.setContent(note.getContent());
            noteRepository.save(x);
        });
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNote(@PathVariable Integer id){
        Optional<Note> deleteNote = noteRepository.findById(id);
        deleteNote.ifPresent(noteRepository::delete);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
