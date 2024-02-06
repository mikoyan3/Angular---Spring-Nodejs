package com.example.backend.controllers;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.db.repo;
import com.example.backend.models.aukcije;
import com.example.backend.models.izmeniHelper;
import com.example.backend.models.korisnici;
import com.example.backend.models.loginHelper;
import com.example.backend.models.umetnine;

import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200/")
public class controller {
    
    @PostMapping("/login")
    public korisnici login(@RequestBody loginHelper lh){
        return new repo().login(lh.getUsername(), lh.getPassword(), lh.getTip());
    }

    @GetMapping("/dohvatiAktivneAukcije")
    public List<aukcije> dohvatiAktivneAukcije() {
        return new repo().dohvatiAktivneAukcije();
    }
    
    @PostMapping("/dohvatiUmetnine")
    public List<umetnine> dohvatiUmetnine(@RequestBody int idA){
        return new repo().dohvatiUmetnine(idA);
    }

    @PostMapping("/izmeniPonudu")
    public void izmeniPonudu(@RequestBody izmeniHelper ih){
        new repo().izmeniPonudu(ih.getIdU(), ih.getPonuda());
    }

    @PostMapping("/dohvatiKupljeneUmetnine")
    public List<umetnine> dohvatiKupljeneUmetnine(@RequestBody String username){
        return new repo().dohvatiKupljeneUmetnine(username);
    }

    @GetMapping("/dohvatiSveAukcije")
    public List<aukcije> dohvatiSveAukcije(){
        return new repo().dohvatiSveAukcije();
    }
}
