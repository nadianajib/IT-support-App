package com.example.demo2.Service;

import com.example.demo2.model.Technicien;
import com.example.demo2.model.Ticket;

import java.util.List;

public interface TicketService {
    Ticket creerTicket(Ticket ticket);
Ticket attribuerTicket(Long ticketId, Long technicienId);
    List<Ticket> getTicketsByTechnicien(Long technicienId);

}
