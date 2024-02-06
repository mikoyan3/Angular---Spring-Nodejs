package com.example.backend.db;

import java.util.List;

import com.example.backend.models.zadaci;

public interface zadaciRepoInterface {
    public void dodajZadatak(String sadrzaj, String tip, String dodeljen);
    public List<zadaci> dohvatiLicneZadatke(String username);
    public List<zadaci> dohvatiDelegiraneZadatke(String username);
    public List<zadaci> dohvatiObavljeneZadatke(String username);
    public String obrisiZadatak(String sadrzaj, Boolean obavljen, String tip, String dodeljen);
    public String obaviZadatak(String sadrzaj, Boolean obavljen, String tip, String dodeljen);
    public String neobaviZadatak(String sadrzaj, Boolean obavljen, String tip, String dodeljen);
}
