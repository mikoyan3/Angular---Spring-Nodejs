package com.example.backend.models;



public class korisnici {
    private String korisnicko_ime;
    private String lozinka;
    private String ime;
    private String prezime;
    private String mejl;
    private String tip;
    
    public korisnici(String korisnicko_ime, String lozinka, String ime, String prezime, String mejl, String tip) {
        this.korisnicko_ime = korisnicko_ime;
        this.lozinka = lozinka;
        this.ime = ime;
        this.prezime = prezime;
        this.mejl = mejl;
        this.tip = tip;
    }
    public String getKorisnicko_ime() {
        return korisnicko_ime;
    }
    public void setKorisnicko_ime(String korisnicko_ime) {
        this.korisnicko_ime = korisnicko_ime;
    }
    public String getLozinka() {
        return lozinka;
    }
    public void setLozinka(String lozinka) {
        this.lozinka = lozinka;
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
    public String getTip() {
        return tip;
    }
    public void setTip(String tip) {
        this.tip = tip;
    }

    
}

