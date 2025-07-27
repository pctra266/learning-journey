package trapham.planFinder;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface PlaneRepository extends ReactiveCrudRepository<Aircraft, Long> {
}
