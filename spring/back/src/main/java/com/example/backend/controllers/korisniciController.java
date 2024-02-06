package com.example.backend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.korisniciRepo;
import com.example.backend.models.korisnici;


@RestController
@RequestMapping("/korisnici")
@CrossOrigin(origins = "http://localhost:4200/")
public class korisniciController {
    
    @PostMapping("/login")
    public korisnici login(@RequestBody korisnici k){
        return new korisniciRepo().login(k.getKor_ime(), k.getLozinka(), k.getTip());
    }

    @GetMapping("/getNajvernijeg")
    public korisnici getNajvernijeg(){
        return new korisniciRepo().getNajvernijeg();
    }
}
