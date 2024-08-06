package model;

import jakarta.persistence.Entity;
import lombok.NoArgsConstructor;
import model.Personne;

@Entity
@NoArgsConstructor

public class Technicien extends Personne {

    public Technicien(String nom, String email, String password) {
        super(nom, email, password, Role.TECHNICIEN);
    }

}