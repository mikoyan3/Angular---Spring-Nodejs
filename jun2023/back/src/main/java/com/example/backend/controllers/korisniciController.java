package com.example.backend.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.korisniciRepo;
import com.example.backend.models.korisnici;
import com.example.backend.models.helpers.clanoviTimaHelper;
import com.example.backend.models.helpers.loginHelper;


@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200/")
public class korisniciController {
    
    @PostMapping("/login")
    public korisnici login(@RequestBody loginHelper lh){
        return new korisniciRepo().login(lh.getUsername(), lh.getPassword(), lh.getTip());
    }

    @PostMapping("/dohvatiClanoveTima")
    public List<korisnici> dohvatiClanoveTima(@RequestBody int tim){
        return new korisniciRepo().dohvatiClanoveTima(tim);
    }

}
