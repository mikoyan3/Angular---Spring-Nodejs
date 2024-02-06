package com.example.backend.models;

public class loginHelper {
    private String username;
    private String password;
    private String tip;
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getTip() {
        return tip;
    }
    public void setTip(String tip) {
        this.tip = tip;
    }
    public loginHelper(String username, String password, String tip) {
        this.username = username;
        this.password = password;
        this.tip = tip;
    }
    
}
