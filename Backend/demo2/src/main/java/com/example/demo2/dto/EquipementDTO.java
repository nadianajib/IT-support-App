package com.example.demo2.dto;

import com.example.demo2.model.EtatEquipement;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
@Getter
@Setter
public class EquipementDTO {
    private Long idEquipement;
    private String nom;
    private String  description;

    private EtatEquipement etat; // Par exemple, "en service", "hors service", etc.


}
