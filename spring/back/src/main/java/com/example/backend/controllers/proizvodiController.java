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
import com.example.backend.db.proizvodiRepo;
import com.example.backend.models.korisnici;
import com.example.backend.models.proizvodi;
import com.example.backend.models.helpers.naruciHelper;

import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/proizvodi")
@CrossOrigin(origins = "http://localhost:4200/")
public class proizvodiController {
    
    @GetMapping("/getAllProizvodi")
    public List<proizvodi> getAllProizvodi(){
        return new proizvodiRepo().getAllProizvodi();
    }
    
    @PostMapping("/dodajNarudzbinu")
    public void dodajNarudzbinu(@RequestBody naruciHelper nh){
        
        new proizvodiRepo().dodajNarudzbinu(nh);
    }

    @PostMapping("/getAllNaruceniProizvodi")
    public List<proizvodi> getAllNaruceniProizvodi(@RequestBody int idN){
        return new proizvodiRepo().getAllNaruceniProizvodi(idN);
    }
}
