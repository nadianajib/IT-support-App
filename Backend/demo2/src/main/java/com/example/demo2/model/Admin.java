package com.example.demo2.model;

import jakarta.persistence.Entity;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
public class Admin extends Personne {

    public Admin(String nom, String email, String password) {
        super(nom, email, password, Role.ADMIN);
    }
}