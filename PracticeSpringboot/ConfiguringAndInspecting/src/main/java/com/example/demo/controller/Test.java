package com.example.demo.controller;

import com.example.demo.Greeting;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/greeting")
public class Test {

    private final Greeting greeting;
    public Test(Greeting greeting) {
        this.greeting = greeting;
    }

    @GetMapping
    public String getTest(){
        return greeting.getName();
    }
    @GetMapping("/coffee")
    public String getCoffee(){
        return greeting.getCoffee();
    }
}
