package com.example.demo2.model;

import com.example.demo2.model.Equipement;
import com.example.demo2.model.Panne;
import com.example.demo2.model.Technicien;
import com.example.demo2.model.Utilisateur;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTi;
    private String description;
    private LocalDateTime dateCreation;

    private EtatTicket etat;
    @ManyToOne
    @JoinColumn(name = "utilisateur_id")
    private Utilisateur utilisateur;

    @ManyToOne
    @JoinColumn(name = "equipement_id")
    private Equipement equipement;

    @ManyToOne
    @JoinColumn(name = "technicien_id")
    private Technicien technicien;

    @ManyToOne
    @JoinColumn(name = "panne_id")
    private Panne panne;

    // Getters, setters, constructors
}