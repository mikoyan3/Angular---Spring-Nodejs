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
import com.example.backend.db.narudzbineRepo;
import com.example.backend.db.proizvodiRepo;
import com.example.backend.models.korisnici;
import com.example.backend.models.narudzbine;
import com.example.backend.models.proizvodi;


@RestController
@RequestMapping("/narudzbine")
@CrossOrigin(origins = "http://localhost:4200/")
public class narudzbineController {
     @GetMapping("/getAllNarudzbine")
    public List<narudzbine> getAllNarudzbine(){
        return new narudzbineRepo().getAllNarudzbine();
    }
}
