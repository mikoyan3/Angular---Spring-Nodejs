package com.example.backend.db;

import com.example.backend.models.korisnici;

public interface korisniciRepoInterface {
    public korisnici login(String username, String password, String tip);
    public korisnici getNajvernijeg();
}
