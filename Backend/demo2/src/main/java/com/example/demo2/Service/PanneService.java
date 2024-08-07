package com.example.demo2.Service;

import com.example.demo2.model.Panne;

import java.util.List;
import java.util.Optional;

public interface PanneService {

    Panne createPanne(Panne panne);

    List<Panne> getAllPannes();

    Optional<Panne> getPanneById(Long id);

    Panne updatePanne(Long id, Panne panne);

    void deletePanne(Long id);
}
