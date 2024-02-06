package com.example.backend.models.helpers;

public class operacijeZadaciHelper {
    private String sadrzaj;
    private Boolean obavljen;
    private String tip;
    private String dodeljen;
    public String getSadrzaj() {
        return sadrzaj;
    }
    public operacijeZadaciHelper(String sadrzaj, Boolean obavljen, String tip, String dodeljen) {
        this.sadrzaj = sadrzaj;
        this.obavljen = obavljen;
        this.tip = tip;
        this.dodeljen = dodeljen;
    }
    public void setSadrzaj(String sadrzaj) {
        this.sadrzaj = sadrzaj;
    }
    public Boolean getObavljen() {
        return obavljen;
    }
    public void setObavljen(Boolean obavljen) {
        this.obavljen = obavljen;
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
