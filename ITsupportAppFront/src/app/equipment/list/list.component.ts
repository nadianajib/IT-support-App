import { Component, OnInit } from '@angular/core';
import { Equipement } from 'src/app/model/equipement';
import { EquipementService } from 'src/app/Service/equipement.service';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class EquipmentListComponent implements OnInit {
  equipements: Equipement[] = [];

  constructor(private equipementService: EquipementService) { }

  ngOnInit(): void {
    this.getEquipements();
  }

  getEquipements(): void {
    this.equipementService.getEquipements().subscribe({
      next: (data) => {
        console.log('Données reçues:', data);  // Vérifiez les données reçues
        this.equipements = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des équipements', err);
      }
    });
  }
}
