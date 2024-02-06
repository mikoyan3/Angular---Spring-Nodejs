package com.example.backend.db;

import java.util.List;

import com.example.backend.models.proizvodi;
import com.example.backend.models.helpers.naruciHelper;

public interface proizvodiRepoInterface {
    public List<proizvodi> getAllProizvodi();
    public void dodajNarudzbinu(naruciHelper nh);
    public List<proizvodi> getAllNaruceniProizvodi(int idN);
}
