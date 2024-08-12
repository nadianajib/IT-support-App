import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipement } from 'src/app/model/equipement';
import { EquipementService } from 'src/app/Service/equipement.service';

@Component({
  selector: 'app-equipment-edit',
  templateUrl: './edit-equipement.component.html',
  styleUrls: ['./edit-equipement.component.scss']
})
export class EquipmentEditComponent implements OnInit {
  equipementForm: FormGroup;
  errorMessage: string = '';
  equipementId: number = 0; // Initialisation

  constructor(
    private fb: FormBuilder,
    private equipementService: EquipementService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.equipementForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      etat: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.equipementId = +this.route.snapshot.paramMap.get('id')!;
    this.loadEquipement();
  }

  loadEquipement(): void {
    this.equipementService.getEquipement().subscribe(
      (data: Equipement[]) => {
        const equipement = data.find(e => e.idEquipement === this.equipementId);
        if (equipement) {
          this.equipementForm.patchValue(equipement);
        } else {
          this.errorMessage = 'Équipement non trouvé.';
        }
      },
      (error) => {
        console.error('Failed to load equipement', error);
        this.errorMessage = 'Une erreur est survenue lors du chargement des détails de l\'équipement.';
      }
    );
  }

  onSubmit(): void {
    if (this.equipementForm.valid) {
      const equipement: Equipement = this.equipementForm.value;
      this.equipementService.updateEquipement(this.equipementId, equipement).subscribe({
        next: () => {
          console.log('Équipement mis à jour avec succès');
          this.router.navigate(['/equipments']); // Redirection après mise à jour
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour de l\'équipement', err);
          this.errorMessage = 'Une erreur est survenue lors de la mise à jour de l\'équipement.';
        }
      });
    }
  }
}
