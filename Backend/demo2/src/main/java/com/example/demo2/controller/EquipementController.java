package com.example.demo2.controller;

import com.example.demo2.model.Equipement;
import com.example.demo2.Service.EquipementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/equipements")
public class EquipementController {

    @Autowired
    private  EquipementService equipementService;


    @PostMapping("/add")
    public ResponseEntity<Equipement> createEquipement(@RequestBody Equipement equipement) {
        Equipement createdEquipement = equipementService.CreateEquipement(equipement);
        return ResponseEntity.ok(createdEquipement);
    }
}