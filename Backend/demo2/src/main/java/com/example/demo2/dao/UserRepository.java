package com.example.demo2.dao;

import com.example.demo2.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Utilisateur, Long> {
}
