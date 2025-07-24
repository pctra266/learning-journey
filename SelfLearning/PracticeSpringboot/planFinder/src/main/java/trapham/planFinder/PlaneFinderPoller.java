package trapham.planFinder;

import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

@EnableScheduling
@Component
class PlaneFinderPoller {
    private final AircraftRepository repository;
    private WebClient client =
            WebClient.create("http://localhost:7634/aircraft");
    private final RedisConnectionFactory connectionFactory;
    public PlaneFinderPoller(RedisConnectionFactory connectionFactory,
                             AircraftRepository repository) {
        this.connectionFactory = connectionFactory;
        this.repository = repository;
    }
    @Scheduled(fixedRate = 1000)
    private void pollPlanes() {
        connectionFactory.getConnection().serverCommands().flushDb();
        client.get()
                .retrieve()
                .bodyToFlux(Aircraft.class).filter(plane -> !plane.getReg().isEmpty())
                .toStream()
                .forEach(repository::save);
        repository.findAll().forEach(System.out::println);
    }
}
