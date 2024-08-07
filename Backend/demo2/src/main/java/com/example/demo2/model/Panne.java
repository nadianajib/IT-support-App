
package com.example.demo2.model;

import com.example.demo2.model.Equipement;
import com.example.demo2.model.EtatPanne;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Panne {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long idPanne;
    private String description;
    private LocalDate dateSignalement;
    private EtatPanne etatPanne;


}
