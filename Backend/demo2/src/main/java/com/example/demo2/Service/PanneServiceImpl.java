package com.example.demo2.Service;

import com.example.demo2.dao.PanneRepository;
import com.example.demo2.model.Panne;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PanneServiceImpl implements PanneService {

    @Autowired
    private PanneRepository panneRepository;

    @Override
    public Panne createPanne(Panne panne) {
        return panneRepository.save(panne);
    }

    @Override
    public List<Panne> getAllPannes() {
        return panneRepository.findAll();
    }

    @Override
    public Optional<Panne> getPanneById(Long id) {
        return panneRepository.findById(id);
    }

    @Override
    public Panne updatePanne(Long id, Panne panne) {
        if (panneRepository.existsById(id)) {
            panne.setIdPanne(id);
            return panneRepository.save(panne);
        }
        return null;
    }

    @Override
    public void deletePanne(Long id) {
        if (panneRepository.existsById(id)) {
            panneRepository.deleteById(id);
        }
    }
}
