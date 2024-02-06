package com.example.backend.models;

public class narudzbinasadrzi {
    private int narudzbina;
    private String proizvod;
    private int kolicina;
    public narudzbinasadrzi(int narudzbina, String proizvod, int kolicina) {
        this.narudzbina = narudzbina;
        this.proizvod = proizvod;
        this.kolicina = kolicina;
    }
    public int getNarudzbina() {
        return narudzbina;
    }
    public void setNarudzbina(int narudzbina) {
        this.narudzbina = narudzbina;
    }
    public String getProizvod() {
        return proizvod;
    }
    public void setProizvod(String proizvod) {
        this.proizvod = proizvod;
    }
    public int getKolicina() {
        return kolicina;
    }
    public void setKolicina(int kolicina) {
        this.kolicina = kolicina;
    }
    
}
