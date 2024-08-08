package com.example.demo2.Service;

import com.example.demo2.dao.*;
import com.example.demo2.model.EtatTicket;
import com.example.demo2.model.Technicien;
import com.example.demo2.model.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

//    @Override
//    public Ticket creerTicket(Ticket ticket) {
//        ticket.setUtilisateur(userRepositoryser.(ticket.getUtilisateur().getId()).orElse(null));
//        ticket.setEquipement(equipementRepository.findById(ticket.getEquipement().getId()).orElse(null));
//        ticket.setTechnicien(technicienRepository.findById(ticket.getTechnicien().getId()).orElse(null));
//        ticket.setPanne(panneRepository.findById(ticket.getPanne().getId()).orElse(null));
//        return ticketRepository.save(ticket);
//    }
@Override
public Ticket attribuerTicket(Long ticketId, Long technicienId) {
    Ticket ticket = ticketRepository.findById(ticketId).orElseThrow(() -> new RuntimeException("Ticket non trouvé"));
    Technicien technicien = technicienRepository.findById(technicienId).orElseThrow(() -> new RuntimeException("Technicien non trouvé"));

    ticket.setTechnicien(technicien);
    ticket.setEtat(EtatTicket.EN_COURS); // Mettre à jour l'état du ticket si nécessaire

    return ticketRepository.save(ticket);
}
}
