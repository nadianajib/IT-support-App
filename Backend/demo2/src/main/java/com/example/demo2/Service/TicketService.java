package com.example.demo2.Service;

import com.example.demo2.model.Ticket;
import com.example.demo2.model.Utilisateur;

import java.util.List;

public interface TicketService {
    Ticket creerTicket(Ticket ticket, Utilisateur user);
Ticket attribuerTicket(Long ticketId, Long technicienId);
//    List<Ticket> getTicketsByTechnicien(Long technicienId);

}
