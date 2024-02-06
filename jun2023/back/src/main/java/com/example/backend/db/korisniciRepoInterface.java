package com.example.backend.db;

import java.util.List;

import com.example.backend.models.korisnici;

public interface korisniciRepoInterface {
    public korisnici login(String username, String password, String tip);
    public List<korisnici> dohvatiClanoveTima(int tim);
}
