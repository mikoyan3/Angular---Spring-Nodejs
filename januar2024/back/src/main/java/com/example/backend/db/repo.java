package com.example.backend.db;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.cglib.core.Local;

import com.example.backend.models.aukcije;
import com.example.backend.models.korisnici;
import com.example.backend.models.umetnine;

public class repo {
    public korisnici login(String username, String password, String tip){
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from korisnici where korisnicko_ime=? and lozinka=? and tip=?");) {
            stm.setString(1, username);
            stm.setString(2, password);
            stm.setString(3, tip);
            ResultSet rs = stm.executeQuery();
            if(rs.next()){
                korisnici k = new korisnici(rs.getString("korisnicko_ime"), rs.getString("lozinka"), rs.getString("ime"), rs.getString("prezime"), rs.getString("mejl"), rs.getString("tip"));
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

    public List<aukcije> dohvatiAktivneAukcije(){
        LocalDateTime today = LocalDateTime.now();
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from aukcije where ? > pocetak and ? < kraj order by kraj ASC");) {
            stm.setTimestamp(1, java.sql.Timestamp.valueOf(today));
            stm.setTimestamp(2, java.sql.Timestamp.valueOf(today));
            List<aukcije> lista = new ArrayList<>();
            ResultSet rs = stm.executeQuery();
            while(rs.next()){
                lista.add(new aukcije(rs.getInt("idA"), rs.getString("naziv"), rs.getTimestamp("pocetak").toLocalDateTime(), rs.getTimestamp("kraj").toLocalDateTime()));
            }
            return lista;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    public List<umetnine> dohvatiUmetnine(int idA){
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from umetnine where idA = ?");) {
            stm.setInt(1, idA);
            List<umetnine> lista = new ArrayList<>();
            ResultSet rs = stm.executeQuery();
            while(rs.next()){
                lista.add(new umetnine(rs.getInt("idU"), rs.getInt("idA"), rs.getString("naziv"), rs.getInt("ponuda"), rs.getString("vlasnik")));
            }
            return lista;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    public void izmeniPonudu(int idU, int ponuda){
        LocalDateTime today = LocalDateTime.now();
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("UPDATE umetnine u SET u.ponuda = ? WHERE u.idU = ? AND ? > (SELECT a.pocetak FROM aukcije a WHERE a.idA = u.idA) AND ? < (SELECT a.kraj FROM aukcije a WHERE a.idA = u.idA)");) {
            stm.setInt(1, ponuda);
            stm.setInt(2, idU);
            stm.setTimestamp(3, java.sql.Timestamp.valueOf(today));
            stm.setTimestamp(4, java.sql.Timestamp.valueOf(today));
            stm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    public List<umetnine> dohvatiKupljeneUmetnine(String username){
        LocalDateTime today = LocalDateTime.now();
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from umetnine u join korisnici k on (u.vlasnik = k.korisnicko_ime) join aukcije a on (u.idA = a.idA) where '2024-02-05 19:44:00' > a.kraj and k.korisnicko_ime = ?");) {
            stm.setString(1, username);
            List<umetnine> lista = new ArrayList<>();
            ResultSet rs = stm.executeQuery();
            while(rs.next()){
                lista.add(new umetnine(rs.getInt("idU"), rs.getInt("idA"), rs.getString("naziv"), rs.getInt("ponuda"), rs.getString("vlasnik")));
            }
            return lista;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    public List<aukcije> dohvatiSveAukcije(){
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from aukcije");) {
            List<aukcije> lista = new ArrayList<>();
            ResultSet rs = stm.executeQuery();
            while(rs.next()){
                lista.add(new aukcije(rs.getInt("idA"), rs.getString("naziv"), rs.getTimestamp("pocetak").toLocalDateTime(), rs.getTimestamp("kraj").toLocalDateTime()));
            }
            return lista;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }
}
