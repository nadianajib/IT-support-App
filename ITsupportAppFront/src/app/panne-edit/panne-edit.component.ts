import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Panne } from 'src/app/model/panne';
import { PanneService } from '../Service/panne.service';

@Component({
  selector: 'app-panne-edit',
  templateUrl: './panne-edit.component.html',
  styleUrls: ['./panne-edit.component.scss']
})
export class PanneEditComponent implements OnInit {
  panne: Panne = { idPanne: 0, description: '', etatPanne: 'SIGNALEE' };
  errorMessage: string = '';
  isNew: boolean = false;

  constructor(
    private panneService: PanneService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isNew = false;
      this.panneService.getPanneById(Number(id)).subscribe(
        (data: Panne) => this.panne = data,
        (error) => {
          console.error('Failed to load panne', error);
          this.errorMessage = 'Une erreur est survenue lors du chargement de la panne.';
        }
      );
    } else {
      this.isNew = true;
    }
  }

  savePanne(): void {
    if (this.isNew) {
      this.panneService.createPanne(this.panne).subscribe({
        next: () => this.router.navigate(['/pannes']),
        error: (err) => {
          console.error('Erreur lors de la création de la panne', err);
          this.errorMessage = 'Une erreur est survenue lors de la création de la panne.';
        }
      });
    } else {
      this.panneService.updatePanne(this.panne.idPanne, this.panne).subscribe({
        next: () => this.router.navigate(['/pannes']),
        error: (err) => {
          console.error('Erreur lors de la mise à jour de la panne', err);
          this.errorMessage = 'Une erreur est survenue lors de la mise à jour de la panne.';
        }
      });
    }
  }
}
