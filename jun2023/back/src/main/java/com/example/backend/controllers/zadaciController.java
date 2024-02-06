package com.example.backend.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.zadaciRepo;
import com.example.backend.models.zadaci;
import com.example.backend.models.helpers.dodavanjeZadatkaHelper;
import com.example.backend.models.helpers.dohvatanjeHelper;
import com.example.backend.models.helpers.operacijeZadaciHelper;


@RestController
@RequestMapping("/zadaci")
@CrossOrigin(origins = "http://localhost:4200/")
public class zadaciController {
    
    @PostMapping("/dodajZadatak")
    public void dodajZadatak(@RequestBody dodavanjeZadatkaHelper dh){
        new zadaciRepo().dodajZadatak(dh.getSadrzaj(), dh.getTip(), dh.getDodeljen());
    }

    @PostMapping("/dohvatiLicneZadatke")
    public List<zadaci> dohvatiLicneZadatke(@RequestBody String dh){
        return new zadaciRepo().dohvatiLicneZadatke(dh);
    }
    @PostMapping("/dohvatiDelegiraneZadatke")
    public List<zadaci> dohvatiDelegiraneZadatke(@RequestBody String dh){
        return new zadaciRepo().dohvatiDelegiraneZadatke(dh);
    }
    @PostMapping("/dohvatiObavljeneZadatke")
    public List<zadaci> dohvatiObavljeneZadatke(@RequestBody String dh){
        return new zadaciRepo().dohvatiObavljeneZadatke(dh);
    }

    @PostMapping("/obrisiZadatak")
    public String obrisiZadatak(@RequestBody operacijeZadaciHelper oh){
        return new zadaciRepo().obrisiZadatak(oh.getSadrzaj(), oh.getObavljen(), oh.getTip(), oh.getDodeljen());
    }

    @PostMapping("/obaviZadatak")
    public String obaviZadatak(@RequestBody operacijeZadaciHelper oh){
        return new zadaciRepo().obaviZadatak(oh.getSadrzaj(), oh.getObavljen(), oh.getTip(), oh.getDodeljen());
    }

    @PostMapping("/neobaviZadatak")
    public String neobaviZadatak(@RequestBody operacijeZadaciHelper oh){
        return new zadaciRepo().neobaviZadatak(oh.getSadrzaj(), oh.getObavljen(), oh.getTip(), oh.getDodeljen());
    }

}
