package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.example.backend.models.narudzbine;
import com.example.backend.models.proizvodi;

public class narudzbineRepo implements narudzbineRepoInterface{

    @Override
    public List<narudzbine> getAllNarudzbine() {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from narudzbine");) {
            ResultSet rs = stm.executeQuery();
            List<narudzbine> narudzbine = new ArrayList<>();
            while(rs.next()){
               narudzbine p = new narudzbine(rs.getInt("idN"), rs.getString("kupac"), rs.getDate("datum").toLocalDate());
               narudzbine.add(p);
            }
            return narudzbine;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }
    
}
