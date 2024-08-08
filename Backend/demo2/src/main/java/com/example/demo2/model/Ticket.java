package com.example.demo2.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTi;
    private String description;
    private LocalDateTime dateCreation;

    @PrePersist
    protected void onCreate(){
        dateCreation = LocalDateTime.now();
    }

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

}