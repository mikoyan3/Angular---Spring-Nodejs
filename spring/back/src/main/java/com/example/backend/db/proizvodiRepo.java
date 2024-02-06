package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.naming.spi.DirStateFactory.Result;

import com.example.backend.models.korisnici;
import com.example.backend.models.proizvodi;
import com.example.backend.models.helpers.naruciHelper;

public class proizvodiRepo implements proizvodiRepoInterface{

    @Override
    public List<proizvodi> getAllProizvodi() {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from proizvodi");) {
            ResultSet rs = stm.executeQuery();
            List<proizvodi> proizvodi = new ArrayList<>();
            while(rs.next()){
                proizvodi p = new proizvodi(rs.getString("naziv"), rs.getString("opis"), rs.getInt("cena"), rs.getInt("promocija"));
                proizvodi.add(p);
            }
            return proizvodi;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public void dodajNarudzbinu(naruciHelper nh) {
        try (Connection conn = DB.source().getConnection()){
            LocalDate datum = LocalDate.now();
            PreparedStatement stm = conn.prepareStatement("insert into narudzbine (kupac, datum) values (?, ?)");
            stm.setString(1, nh.getKorisnik().getKor_ime());
            stm.setDate(2, java.sql.Date.valueOf(datum));
            stm.executeUpdate();
            for(int i = 0; i < nh.getLength(); i++){
                PreparedStatement stm1 = conn.prepareStatement("select max(idN) as max from narudzbine");
                ResultSet rs = stm1.executeQuery();
                if(rs.next()){
                    int max = rs.getInt("max");
                    stm1 = conn.prepareStatement("insert into narudzbinasadrzi (narudzbina, proizvod, kolicina) values (?, ?, ?)");
                    stm1.setInt(1, max);
                    stm1.setString(2, nh.getProizvodi().get(i).getNaziv());
                    stm1.setInt(3, nh.getKolicina().get(i));
                    stm1.executeUpdate();
                }
            }
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    @Override
    public List<proizvodi> getAllNaruceniProizvodi(int idN) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("SELECT * FROM narudzbine n JOIN narudzbinasadrzi ns on (n.idN = ns.narudzbina) JOIN proizvodi p ON (ns.proizvod = p.naziv) where n.idN = ?");) {
            stm.setInt(1, idN);
            ResultSet rs = stm.executeQuery();
            List<proizvodi> proizvodi = new ArrayList<>();
            while(rs.next()){
                proizvodi p = new proizvodi(rs.getString("naziv"), rs.getString("opis"), rs.getInt("cena"), rs.getInt("promocija"));
                proizvodi.add(p);
            }
            return proizvodi;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }
    
}
