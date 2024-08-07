
package com.example.demo2.model;

import com.example.demo2.model.EtatPanne;
import com.example.demo2.model.Historique;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Panne {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPanne;
    private String description;
    private EtatPanne etatPanne;

    @JsonIgnore
    @OneToMany(mappedBy = "panne")
    private List<Historique> historiques;

}
