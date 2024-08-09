import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipement } from '../model/equipement';
import { EquipementService } from '../Service/equipement.service';

@Component({
  selector: 'app-equipement-list',
  templateUrl: './equipement.component.html', // Assure-toi que le nom est correct
  styleUrls: ['./equipement.component.scss']
})
export class EquipementListComponent implements OnInit {

  equipements: Equipement[] = [];
  equipementForm: FormGroup;

  constructor(
    private equipementService: EquipementService,
    private fb: FormBuilder
  ) {
    this.equipementForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      etat: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadEquipements();
  }

  loadEquipements(): void {
    this.equipementService.getEquipements().subscribe(data => {
      this.equipements = data;
    });
  }

  onSubmit(): void {
    if (this.equipementForm.valid) {
      this.equipementService.createEquipement(this.equipementForm.value).subscribe({
        next: () => {
          alert('Équipement ajouté avec succès');
          this.loadEquipements(); // Recharge la liste des équipements
          this.equipementForm.reset(); // Réinitialise le formulaire
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout de l\'équipement:', err);
          alert('Une erreur est survenue. Veuillez réessayer.');
        }
      });
    }
  }
}
