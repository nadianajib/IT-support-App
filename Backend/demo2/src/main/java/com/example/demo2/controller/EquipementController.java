package com.example.demo2.controller;

import com.example.demo2.model.Equipement;
import com.example.demo2.Service.EquipementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @GetMapping("/all")
    public ResponseEntity<List<Equipement>> getAllEquipements() {
        List<Equipement> equipements = equipementService.getAllEquipements();
        return ResponseEntity.ok(equipements);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Equipement> updateEquipement(@PathVariable("id") Long id, @RequestBody Equipement equipement) {
        Equipement updatedEquipement = equipementService.updateEquipement(id, equipement);
        return ResponseEntity.ok(updatedEquipement);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEquipement(@PathVariable("id") Long id) {
        equipementService.deleteEquipement(id);
        return ResponseEntity.noContent().build();
    }
}