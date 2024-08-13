import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Equipement } from 'src/app/model/equipement';
import { EquipementService } from 'src/app/Service/equipement.service';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class EquipmentListComponent implements OnInit {
  equipements: Equipement[] = [];
  errorMessage: string = '';

  constructor(
    private equipementService: EquipementService,
    private router: Router  
  ) {}

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

  onDelete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet équipement ?')) {
      this.equipementService.deleteEquipement(id).subscribe({
        next: () => {
          console.log('Équipement supprimé avec succès');
          this.loadEquipements(); // Recharger la liste après suppression
        },
        error: (err) => {
          console.error('Erreur lors de la suppression de l\'équipement', err);
          this.errorMessage = 'Une erreur est survenue lors de la suppression de l\'équipement.';
        }
      });
    }
  }

  onEdit(id: number): void {
    this.router.navigate(['/equipments/edit', id]);  // Redirection vers la page d'édition
  }
}
