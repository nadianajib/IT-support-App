import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Panne } from '../model/panne';
import { PanneService } from '../Service/panne.service';

@Component({
  selector: 'app-panne-add',
  templateUrl: './panne-add.component.html',
  styleUrls: ['./panne-add.component.scss']
})
export class PanneAddComponent {
  panneForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private panneService: PanneService,
    private router: Router
  ) {
    this.panneForm = this.fb.group({
      description: ['', Validators.required],
      etatPanne: ['SIGNALEE', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.panneForm.valid) {
      const newPanne: Panne = this.panneForm.value;
      this.panneService.createPanne(newPanne).subscribe({
        next: () => this.router.navigate(['/pannes']),
        error: err => this.errorMessage = 'Erreur lors de l\'ajout de la panne'
      });
    }
  }
}
