package com.example.backend.models;

public class izmeniHelper {
    private int idU;
    private int ponuda;
    public izmeniHelper(int idU, int ponuda) {
        this.idU = idU;
        this.ponuda = ponuda;
    }
    public int getIdU() {
        return idU;
    }
    public void setIdU(int idU) {
        this.idU = idU;
    }
    public int getPonuda() {
        return ponuda;
    }
    public void setPonuda(int ponuda) {
        this.ponuda = ponuda;
    }
    
}
