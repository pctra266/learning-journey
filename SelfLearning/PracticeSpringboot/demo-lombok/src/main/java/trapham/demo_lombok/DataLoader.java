package trapham.demo_lombok;

import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

//import javax.annotation.PostConstruct;
import java.time.Instant;

@Component
@AllArgsConstructor
public class DataLoader {
    private final AircraftRepository repository;
    @PostConstruct
    private void loadData() {
//        repository.deleteAll();

        repository.save(new Aircraft(null,
                "AAL608", "1451", "N754UW", "AA608", "IND-PHX", "A319", "A3",
                36000, 255, 423, 0, 36000,
                39.150284, -90.684795, 1012.8, 26.575562, 295.501994,
                true, false,
                Instant.parse("2020-11-27T21:29:35Z"),
                Instant.parse("2020-11-27T21:29:34Z"),
                Instant.parse("2020-11-27T21:29:27Z")));

//        repository.save(new Aircraft(null, "SAL54", "sqwk", "N02659",
//                "SAL54", "route", "BE33", "ct",
//                31704, 248, 434, 0, 0,
//                41.06652069091797, -95.41410064697266, 0.0, 0.0, 0.0,
//                false, true,
//                Instant.parse("2025-07-23T15:30:51.111382Z"),
//                Instant.parse("2025-07-23T15:30:51.111382Z"),
//                Instant.parse("2025-07-23T15:30:51.111382Z")));
        System.out.println(repository.findAll());
    }
}
