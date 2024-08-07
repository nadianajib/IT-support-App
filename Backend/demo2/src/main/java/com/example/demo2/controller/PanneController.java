package com.example.demo2.controller;

import com.example.demo2.Service.PanneService;
import com.example.demo2.model.Panne;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pannes")
public class PanneController {

    @Autowired
    private PanneService panneService;

    @PostMapping("/add")
    public ResponseEntity<Panne> createPanne(@RequestBody Panne panne) {
        Panne createdPanne = panneService.createPanne(panne);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPanne);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Panne>> getAllPannes() {
        List<Panne> pannes = panneService.getAllPannes();
        return ResponseEntity.ok(pannes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Panne> getPanneById(@PathVariable("id") Long id) {
        Optional<Panne> panne = panneService.getPanneById(id);
        return panne.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Panne> updatePanne(@PathVariable("id") Long id, @RequestBody Panne panne) {
        Panne updatedPanne = panneService.updatePanne(id, panne);
        return updatedPanne != null ? ResponseEntity.ok(updatedPanne) : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePanne(@PathVariable("id") Long id) {
        panneService.deletePanne(id);
        return ResponseEntity.noContent().build();
    }
}
