package trapham.demo_nosql

import org.springframework.data.repository.CrudRepository

interface AircraftRepository: CrudRepository<Aircraft, String>