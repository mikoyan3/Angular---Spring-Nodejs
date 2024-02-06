package com.example.backend.models.helpers;

public class dodavanjeZadatkaHelper {
    private String sadrzaj;
    private String tip;
    private String dodeljen;
    public String getSadrzaj() {
        return sadrzaj;
    }
    public dodavanjeZadatkaHelper(String sadrzaj, String tip, String dodeljen) {
        this.sadrzaj = sadrzaj;
        this.tip = tip;
        this.dodeljen = dodeljen;
    }
    public void setSadrzaj(String sadrzaj) {
        this.sadrzaj = sadrzaj;
    }
    public String getTip() {
        return tip;
    }
    public void setTip(String tip) {
        this.tip = tip;
    }
    public String getDodeljen() {
        return dodeljen;
    }
    public void setDodeljen(String dodeljen) {
        this.dodeljen = dodeljen;
    }
    
}
