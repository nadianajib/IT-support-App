package com.example.demo2.controller;

import com.example.demo2.Service.TicketService;
import com.example.demo2.dao.UserRepository;
import com.example.demo2.model.Ticket;
import com.example.demo2.model.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TicketService ticketService;

    @PostMapping("/User/créer")
    public ResponseEntity<String> creerTicket(@RequestBody Ticket ticket, @AuthenticationPrincipal Utilisateur user) {
        try {
            Utilisateur utilisateurVerifie = userRepository
                    .findById(user.getId())
                    .orElseThrow(()-> new RuntimeException("utilisateur not found"));

            ticketService.creerTicket(ticket,user);

            return ResponseEntity.status(HttpStatus.CREATED).body("created successfully");
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("not created" + e.getMessage());
        }
    }

    @PutMapping("/attribuer/{ticketId}/{technicienId}")
    public Ticket attribuerTicket(@PathVariable Long ticketId, @PathVariable Long technicienId) {
        return ticketService.attribuerTicket(ticketId, technicienId);
    }
//    @GetMapping("/technicien/{technicienId}")
//    public ResponseEntity<List<Ticket>> getTicketsByTechnicien(@PathVariable Long technicienId) {
//        List<Ticket> tickets = ticketService.getTicketsByTechnicien(technicienId);
//        return new ResponseEntity<>(tickets, HttpStatus.OK);
//    }
}
