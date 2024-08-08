package com.example.demo2.Service;

import com.example.demo2.model.Equipement;

import java.util.List;



public interface EquipementService {
    Equipement CreateEquipement(Equipement equipement);

    List<Equipement> getAllEquipements();

    Equipement updateEquipement(Long id, Equipement equipement);

    void deleteEquipement(Long id);

 }
