package com.example.backend.models;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

public class korisnici {
    private String kor_ime;
    private String ime;
    private String prezime;
    private String mejl;
    @DateTimeFormat(iso = ISO.DATE)
    private LocalDate datum;
    private String tip;
    public korisnici(String kor_ime, String ime, String prezime, String mejl, LocalDate datum, String tip,
            String lozinka) {
        this.kor_ime = kor_ime;
        this.ime = ime;
        this.prezime = prezime;
        this.mejl = mejl;
        this.datum = datum;
        this.tip = tip;
        this.lozinka = lozinka;
    }
    private String lozinka;
    public String getKor_ime() {
        return kor_ime;
    }
    public void setKor_ime(String kor_ime) {
        this.kor_ime = kor_ime;
    }
    public String getIme() {
        return ime;
    }
    public void setIme(String ime) {
        this.ime = ime;
    }
    public String getPrezime() {
        return prezime;
    }
    public void setPrezime(String prezime) {
        this.prezime = prezime;
    }
    public String getMejl() {
        return mejl;
    }
    public void setMejl(String mejl) {
        this.mejl = mejl;
    }
    public LocalDate getDatum() {
        return datum;
    }
    public void setDatum(LocalDate datum) {
        this.datum = datum;
    }
    public String getTip() {
        return tip;
    }
    public void setTip(String tip) {
        this.tip = tip;
    }
    public String getLozinka() {
        return lozinka;
    }
    public void setLozinka(String lozinka) {
        this.lozinka = lozinka;
    }

    
}
