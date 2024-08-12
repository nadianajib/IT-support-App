import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipementService } from '../Service/equipement.service';

@Component({
  selector: 'app-equipment-add',
  templateUrl: './addequipement.component.html',
  styleUrls: ['./addequipement.component.scss']
})
export class EquipmentAddComponent implements OnInit {
  equipementForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private equipementService: EquipementService,
    private router: Router
  ) {
    this.equipementForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      etat: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.equipementForm.valid) {
      const equipement = this.equipementForm.value;
      console.log('Données envoyées :', equipement); // Ajoutez cette ligne pour vérifier les données
      this.equipementService.createEquipement(equipement).subscribe({
        next: (data) => {
          console.log('Équipement ajouté avec succès', data);
          this.router.navigate(['/equipments']);  // Redirection après ajout
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout de l\'équipement', err);
        }
      });
    }
  }
}
