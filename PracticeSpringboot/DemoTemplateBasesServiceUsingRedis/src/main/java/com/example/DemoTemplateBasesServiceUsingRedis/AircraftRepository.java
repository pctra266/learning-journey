package com.example.DemoTemplateBasesServiceUsingRedis;

import org.springframework.data.repository.CrudRepository;

public interface AircraftRepository extends CrudRepository<Aircraft, Long> {}