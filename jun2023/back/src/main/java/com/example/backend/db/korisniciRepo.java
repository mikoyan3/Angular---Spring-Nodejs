package com.example.backend.db;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.example.backend.models.korisnici;

public class korisniciRepo implements korisniciRepoInterface{

    @Override
    public korisnici login(String username, String password, String tip) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from korisnici where korisnicko_ime=? and lozinka=? and tip=?");) {
            stm.setString(1, username);
            stm.setString(2, password);
            stm.setString(3, tip);
            ResultSet rs = stm.executeQuery();
            if(rs.next()){
                korisnici user = new korisnici(rs.getString("korisnicko_ime"), rs.getString("lozinka"), rs.getString("ime"), rs.getString("prezime"), rs.getString("tip"), rs.getInt("tim"));
                return user;
            }
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<korisnici> dohvatiClanoveTima(int tim) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from korisnici where tim = ?");) {
            stm.setInt(1, tim);
            ResultSet rs = stm.executeQuery();
            List<korisnici> list = new ArrayList<>();
            while(rs.next()){
                korisnici user = new korisnici(rs.getString("korisnicko_ime"), rs.getString("lozinka"), rs.getString("ime"), rs.getString("prezime"), rs.getString("tip"), rs.getInt("tim"));
                list.add(user);
            }
            return list;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }
    
}
