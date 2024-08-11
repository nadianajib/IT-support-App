import { Component, OnInit } from '@angular/core';
import { Equipement } from 'src/app/model/equipement';
import { EquipementService } from 'src/app/Service/equipement.service';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class EquipmentListComponent implements OnInit {
onDelete(arg0: any) {
throw new Error('Method not implemented.');
}
equipements: Equipement[] = [];
errorMessage: string = '';

constructor(private equipementService:EquipementService ) {}

ngOnInit(): void {
  this.loadEquipements();
}

loadEquipements(): void {
  this.equipementService.getEquipement().subscribe(
    (data: Equipement[]) => {
      this.equipements = data;
    },
    (error) => {
      console.error('Failed to load equipements', error);
      this.errorMessage = 'Une erreur est survenue lors du chargement des équipements.';
    }
  );
}
}