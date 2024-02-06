package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.example.backend.models.korisnici;
import com.example.backend.models.zadaci;

public class zadaciRepo implements zadaciRepoInterface{

    @Override
    public void dodajZadatak(String sadrzaj, String tip, String dodeljen) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("insert into zadaci (sadrzaj, obavljen, tip, dodeljen) values (?, ?, ?, ?)");) {
            System.out.println(dodeljen);
            System.out.println(sadrzaj);
            System.out.println(tip);
            stm.setString(1, sadrzaj);
            stm.setInt(2, 0);
            stm.setString(3, tip);
            stm.setString(4, dodeljen);
            int res = stm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    @Override
    public List<zadaci> dohvatiLicneZadatke(String username) {
        String tip = "licni";
        int ob = 0;
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from zadaci where obavljen = ? and tip=? and dodeljen=?");) {
            stm.setInt(1, ob);
            stm.setString(2, tip);
            stm.setString(3, username);
            ResultSet rs = stm.executeQuery();
            List<zadaci> list = new ArrayList<>();
            while(rs.next()){
                zadaci zad = new zadaci(rs.getInt("id"), rs.getString("sadrzaj"), rs.getInt("obavljen"), rs.getString("tip"), rs.getString("dodeljen"));
                list.add(zad);
            }
            return list;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<zadaci> dohvatiDelegiraneZadatke(String username) {
        String tip = "delegiran";
        int ob = 0;
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from zadaci where obavljen = ? and tip=? and dodeljen=?");) {
            stm.setInt(1, ob);
            stm.setString(2, tip);
            stm.setString(3, username);
            ResultSet rs = stm.executeQuery();
            List<zadaci> list = new ArrayList<>();
            while(rs.next()){
                zadaci zad = new zadaci(rs.getInt("id"), rs.getString("sadrzaj"), rs.getInt("obavljen"), rs.getString("tip"), rs.getString("dodeljen"));
                list.add(zad);
            }
            return list;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<zadaci> dohvatiObavljeneZadatke(String username) {
        int ob = 1;
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from zadaci where obavljen=? and dodeljen=?");) {
            stm.setInt(1, ob);
            stm.setString(2, username);
            ResultSet rs = stm.executeQuery();
            List<zadaci> list = new ArrayList<>();
            while(rs.next()){
                zadaci zad = new zadaci(rs.getInt("id"), rs.getString("sadrzaj"), rs.getInt("obavljen"), rs.getString("tip"), rs.getString("dodeljen"));
                list.add(zad);
            }
            return list;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public String obrisiZadatak(String sadrzaj, Boolean obavljen, String tip, String dodeljen) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("delete from zadaci where sadrzaj=? and obavljen=? and tip=? and dodeljen=?");) {
            stm.setString(1, sadrzaj);
            if(obavljen == true) stm.setInt(2, 1);
            else stm.setInt(2, 0);
            stm.setString(3, tip);
            stm.setString(4, dodeljen);
            int res = stm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public String obaviZadatak(String sadrzaj, Boolean obavljen, String tip, String dodeljen) {
        int ob = 1;
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("update zadaci set obavljen=? where sadrzaj=? and obavljen=? and tip=? and dodeljen=?");) {
            stm.setInt(1, ob);
            stm.setString(2, sadrzaj);
            if(obavljen == true) stm.setInt(3, 1);
            else stm.setInt(3, 0);
            stm.setString(4, tip);
            stm.setString(5, dodeljen);
            int res = stm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public String neobaviZadatak(String sadrzaj, Boolean obavljen, String tip, String dodeljen) {
        int ob = 0;
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("update zadaci set obavljen=? where sadrzaj=? and obavljen=? and tip=? and dodeljen=?");) {
            stm.setInt(1, ob);
            stm.setString(2, sadrzaj);
            if(obavljen == true) stm.setInt(3, 1);
            else stm.setInt(3, 0);
            stm.setString(4, tip);
            stm.setString(5, dodeljen);
            int res = stm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }
    
}
