package trapham.planFinder;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Random;

@Service
public class PlaneFinderService {
    private final PlaneRepository repo;
    private final FlightGenerator generator;
    private URL acURL;
    private final ObjectMapper om;

    @SneakyThrows
    public PlaneFinderService(PlaneRepository repo, FlightGenerator generator) throws MalformedURLException {
        this.repo = repo;
        this.generator = generator;

        acURL = new URL("http://192.168.1.139/ajax/aircraft");
        om = new ObjectMapper();
    }

    public Flux<Aircraft> getAircraft() {
        return saveSamplePositions();
    }

    public Flux<Aircraft> saveSamplePositions() {
        final Random rnd = new Random();

        repo.deleteAll();

        for (int i = 0; i < rnd.nextInt(10); i++) {
            repo.save(generator.generate());
        }

        return repo.findAll();
    }
}
