package com.example.demo2.Service;

import com.example.demo2.Service.EquipementService;
import com.example.demo2.dao.EquipementRepository;
import com.example.demo2.model.Equipement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EquipementServiceImpl implements EquipementService {

    @Autowired
    private EquipementRepository equipementRepository;


    @Override
    public Equipement CreateEquipement(Equipement equipement) {
        return equipementRepository.save(equipement);
    }

    public List<Equipement> getAllEquipements() {
        return equipementRepository.findAll();
    }
    public Equipement updateEquipement(Long id, Equipement equipement) {
        if (equipementRepository.existsById(id)) {
            equipement.setIdEquipement(id);
            return equipementRepository.save(equipement);
        }
        return null;
    }
    public void deleteEquipement(Long id) {
        if (equipementRepository.existsById(id)) {
            equipementRepository.deleteById(id);
        }
    }


}