package com.example.DemoTemplateBasesServiceUsingRedis;

import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisOperations;

public class AircraftRepository {
    private final RedisConnectionFactory connectionFactory;
    private final RedisOperations<String, Aircraft> redisOperations;

    public AircraftRepository(RedisConnectionFactory connectionFactory, RedisOperations<String, Aircraft> redisOperations) {
        this.connectionFactory = connectionFactory;
        this.redisOperations = redisOperations;
    }

    public void deleteAll(){
        connectionFactory.getConnection().serverCommands().flushDb();
    }

    public void save(Aircraft aircraft) {

    }
}
