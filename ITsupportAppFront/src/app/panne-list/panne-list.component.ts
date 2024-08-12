import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Panne } from 'src/app/model/panne';
import { PanneService } from '../Service/panne.service';

@Component({
  selector: 'app-panne-list',
  templateUrl: './panne-list.component.html',
  styleUrls: ['./panne-list.component.scss']
})
export class PanneListComponent implements OnInit {
  pannes: Panne[] = [];
  errorMessage: string = '';

  constructor(
    private panneService: PanneService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPannes();
  }

  loadPannes(): void {
    this.panneService.getPannes().subscribe(
      (data: Panne[]) => {
        this.pannes = data;
      },
      (error) => {
        console.error('Failed to load pannes', error);
        this.errorMessage = 'Une erreur est survenue lors du chargement des pannes.';
      }
    );
  }

  onDelete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette panne ?')) {
      this.panneService.deletePanne(id).subscribe({
        next: () => {
          console.log('Panne supprimée avec succès');
          this.loadPannes(); // Recharger la liste après suppression
        },
        error: (err) => {
          console.error('Erreur lors de la suppression de la panne', err);
          this.errorMessage = 'Une erreur est survenue lors de la suppression de la panne.';
        }
      });
    }
  }

  onEdit(id: number): void {
    this.router.navigate(['/pannes/edit', id]);  // Redirection vers la page d'édition
  }
}
