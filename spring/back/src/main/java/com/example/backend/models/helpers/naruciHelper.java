package com.example.backend.models.helpers;

import java.util.List;

import com.example.backend.models.korisnici;
import com.example.backend.models.proizvodi;

public class naruciHelper {
    private korisnici korisnik;
    private List<proizvodi> proizvodi;
    private List<Integer> kolicina;
    public naruciHelper(korisnici korisnik, List<com.example.backend.models.proizvodi> proizvodi,
            List<Integer> kolicina) {
        this.korisnik = korisnik;
        this.proizvodi = proizvodi;
        this.kolicina = kolicina;
    }
    public int getLength(){
        return proizvodi.size();
    }
    public korisnici getKorisnik() {
        return korisnik;
    }
    public void setKorisnik(korisnici korisnik) {
        this.korisnik = korisnik;
    }
    public List<proizvodi> getProizvodi() {
        return proizvodi;
    }
    public void setProizvodi(List<proizvodi> proizvodi) {
        this.proizvodi = proizvodi;
    }
    public List<Integer> getKolicina() {
        return kolicina;
    }
    public void setKolicina(List<Integer> kolicina) {
        this.kolicina = kolicina;
    }
    
    
}
