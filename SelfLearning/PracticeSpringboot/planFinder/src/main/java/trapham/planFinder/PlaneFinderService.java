package trapham.planFinder;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;

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

    public Iterable<Aircraft> getAircraft() throws IOException {
        return saveSamplePositions();
//        List<Aircraft> positions = new ArrayList<>();
//
//        JsonNode aircraftNodes = null;
//        try {
//            aircraftNodes = om.readTree(acURL)
//                    .get("aircraft");
//
//            aircraftNodes.iterator().forEachRemaining(node -> {
//                try {
//                    positions.add(om.treeToValue(node, Aircraft.class));
//                } catch (JsonProcessingException e) {
//                    e.printStackTrace();
//                }
//            });
//        } catch (IOException e) {
//            System.out.println("\n>>> IO Exception: " + e.getLocalizedMessage() +
//                    ", generating and providing sample data.\n");
//            return saveSamplePositions();
//        }
//        if (positions.size() > 0) {
//            positions.forEach(System.out::println);
//
//            repo.deleteAll();
//            return repo.saveAll(positions);
//        } else {
//            System.out.println("\n>>> No positions to report, generating and providing sample data.\n");
//            return saveSamplePositions();
//        }
    }

    private Iterable<Aircraft> saveSamplePositions() {
        final Random rnd = new Random();

        repo.deleteAll();

        for (int i = 0; i < rnd.nextInt(10); i++) {
            repo.save(generator.generate());
        }

        return repo.findAll();
    }
}
