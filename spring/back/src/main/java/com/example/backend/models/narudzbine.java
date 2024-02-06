package com.example.backend.models;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

public class narudzbine {
    private int idN;
    private String kupac;
    @DateTimeFormat(iso = ISO.DATE)
    private LocalDate datum;
    public int getIdN() {
        return idN;
    }
    public void setIdN(int idN) {
        this.idN = idN;
    }
    public narudzbine(int idN, String kupac, LocalDate datum) {
        this.idN = idN;
        this.kupac = kupac;
        this.datum = datum;
    }
    public String getKupac() {
        return kupac;
    }
    public void setKupac(String kupac) {
        this.kupac = kupac;
    }
    public LocalDate getDatum() {
        return datum;
    }
    public void setDatum(LocalDate datum) {
        this.datum = datum;
    }
       
}
