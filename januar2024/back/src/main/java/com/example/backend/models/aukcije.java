package com.example.backend.models;

import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

public class aukcije {
    private int idA;
    private String naziv;
    @DateTimeFormat(iso = ISO.DATE)
    private LocalDateTime pocetak;
    public aukcije(int idA, String naziv, LocalDateTime pocetak, LocalDateTime kraj) {
        this.idA = idA;
        this.naziv = naziv;
        this.pocetak = pocetak;
        this.kraj = kraj;
    }
    @DateTimeFormat(iso = ISO.DATE)
    private LocalDateTime kraj;
    public int getIdA() {
        return idA;
    }
    public void setIdA(int idA) {
        this.idA = idA;
    }
    public String getNaziv() {
        return naziv;
    }
    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }
    public LocalDateTime getPocetak() {
        return pocetak;
    }
    public void setPocetak(LocalDateTime pocetak) {
        this.pocetak = pocetak;
    }
    public LocalDateTime getKraj() {
        return kraj;
    }
    public void setKraj(LocalDateTime kraj) {
        this.kraj = kraj;
    }

    
}
