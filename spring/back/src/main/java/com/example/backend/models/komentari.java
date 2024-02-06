package com.example.backend.models;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

public class komentari {
    private int idK;
    private String proizvod;
    private String tekst;
    @DateTimeFormat(iso = ISO.DATE)
    private LocalDate datum;
    private String korisnik;
    private String status;
    public int getIdK() {
        return idK;
    }
    public komentari(int idK, String proizvod, String tekst, LocalDate datum, String korisnik, String status) {
        this.idK = idK;
        this.proizvod = proizvod;
        this.tekst = tekst;
        this.datum = datum;
        this.korisnik = korisnik;
        this.status = status;
    }
    public void setIdK(int idK) {
        this.idK = idK;
    }
    public String getProizvod() {
        return proizvod;
    }
    public void setProizvod(String proizvod) {
        this.proizvod = proizvod;
    }
    public String getTekst() {
        return tekst;
    }
    public void setTekst(String tekst) {
        this.tekst = tekst;
    }
    public LocalDate getDatum() {
        return datum;
    }
    public void setDatum(LocalDate datum) {
        this.datum = datum;
    }
    public String getKorisnik() {
        return korisnik;
    }
    public void setKorisnik(String korisnik) {
        this.korisnik = korisnik;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    
}
