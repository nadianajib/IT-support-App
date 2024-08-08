package com.example.demo2.controller;

import com.example.demo2.Service.TicketService;
import com.example.demo2.model.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    @Autowired
    private TicketService ticketService;

//    @PostMapping
//    public ResponseEntity<Ticket> creerTicket(@RequestBody Ticket ticket) {
//        Ticket createdTicket = ticketService.creerTicket(ticket);
//        return new ResponseEntity<>(createdTicket, HttpStatus.CREATED);
//    }

    @PutMapping("/attribuer/{ticketId}/{technicienId}")
    public Ticket attribuerTicket(@PathVariable Long ticketId, @PathVariable Long technicienId) {
        return ticketService.attribuerTicket(ticketId, technicienId);
    }
}