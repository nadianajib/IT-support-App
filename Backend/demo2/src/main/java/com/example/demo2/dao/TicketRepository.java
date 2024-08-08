package com.example.demo2.dao;

import com.example.demo2.model.Equipement;
import com.example.demo2.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

    List<Ticket> findByTechnicienId(Long technicienId);

}
