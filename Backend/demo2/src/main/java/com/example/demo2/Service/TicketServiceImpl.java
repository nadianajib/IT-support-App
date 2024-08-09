package com.example.demo2.Service;

import com.example.demo2.dao.*;
import com.example.demo2.model.EtatTicket;
import com.example.demo2.model.Technicien;
import com.example.demo2.model.Ticket;
import com.example.demo2.model.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TicketServiceImpl implements TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private PersonneRepository userRepository;
    @Autowired
    private EquipementRepository equipementRepository;
    @Autowired
    private TechnicienRepository technicienRepository;
    @Autowired
    private PanneRepository panneRepository;

    @Override
    public Ticket creerTicket(Ticket ticket, Utilisateur user) {
        ticket.setEquipement(equipementRepository.findById(ticket.getEquipement().getIdEquipement()).orElse(null));
        ticket.setPanne(panneRepository.findById(ticket.getPanne().getIdPanne()).orElse(null));
        ticket.setUtilisateur(user);
        ticket.setEtat(EtatTicket.OUVERT);
        ticket.setDateCreation(LocalDateTime.now());

        return ticketRepository.save(ticket);
    }

@Override
public Ticket attribuerTicket(Long ticketId, Long technicienId) {
    Ticket ticket = ticketRepository.findById(ticketId).orElseThrow(() -> new RuntimeException("Ticket non trouvé"));
    Technicien technicien = technicienRepository.findById(technicienId).orElseThrow(() -> new RuntimeException("Technicien non trouvé"));

    ticket.setTechnicien(technicien);
    ticket.setEtat(EtatTicket.EN_COURS);

    return ticketRepository.save(ticket);
}
//    @Override
//    public List<Ticket> getTicketsByTechnicien(Long technicienId) {
//        return ticketRepository.findByTechnicienId(technicienId);
//    }

}
