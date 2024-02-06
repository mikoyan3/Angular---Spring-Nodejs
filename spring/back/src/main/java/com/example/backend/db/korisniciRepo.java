package com.example.backend.db;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.backend.models.korisnici;

public class korisniciRepo implements korisniciRepoInterface{

    @Override
    public korisnici login(String username, String password, String tip) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from korisnici where kor_ime=? and lozinka=? and tip=?");) {
            stm.setString(1, username);
            stm.setString(2, password);
            stm.setString(3, tip);
            ResultSet rs = stm.executeQuery();
            if(rs.next()){
                korisnici k = new korisnici(rs.getString("kor_ime"), rs.getString("ime"), rs.getString("prezime"), rs.getString("mejl"), rs.getDate("datum_rodjenja").toLocalDate(), rs.getString("tip"), rs.getString("lozinka"));
                return k;
            } else {
                return null;
            }
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public korisnici getNajvernijeg() {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("SELECT kupac, count(kupac) as broj from narudzbine group by kupac order by broj desc");) {
            ResultSet rs = stm.executeQuery();
            if(rs.next()){
                korisnici k = new korisnici(rs.getString("kupac"), null, null, null, null, null, null);
                return k;
            } else {
                return null;
            }
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    
    
}
