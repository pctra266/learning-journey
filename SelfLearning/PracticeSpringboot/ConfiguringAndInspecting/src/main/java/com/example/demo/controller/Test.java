package com.example.demo.controller;

import com.example.demo.Greeting;
import com.example.demo.model.Droid;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class Test {

    private final Greeting greeting;
    private final Droid droid;
    public Test(Greeting greeting, Droid droid) {
        this.greeting = greeting;
        this.droid = droid;
    }

    @GetMapping("/greeting")
    public String getTest(){
        return greeting.getName();
    }
    @GetMapping("/greeting/coffee")
    public String getCoffee(){
        return greeting.getCoffee();
    }
    @GetMapping("/droid")
    Droid getDroid() {
        return droid;
    }
}
