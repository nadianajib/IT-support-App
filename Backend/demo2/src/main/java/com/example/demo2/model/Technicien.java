package com.example.demo2.model;

import jakarta.persistence.Entity;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor

public class Technicien extends Personne {

    public Technicien(String nom, String email, String password) {
        super(nom, email, password, Role.TECHNICIEN);
    }

}