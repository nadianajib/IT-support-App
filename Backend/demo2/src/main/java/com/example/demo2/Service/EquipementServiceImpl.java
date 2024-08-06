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
}