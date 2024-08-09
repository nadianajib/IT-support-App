import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipementComponent } from './equipement/equipement.component';

const routes: Routes = [
  { path: 'equipements', component: EquipementComponent },
  // Ajoutez d'autres routes ici
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }