import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipementListComponent } from './equipement/equipement.component';

const routes: Routes = [
  { path: 'equipement', component: EquipementListComponent },
  { path: 'add-equipement', component: EquipementListComponent }, // Route pour le formulaire d'ajout
  { path: '', redirectTo: '/equipements', pathMatch: 'full' }
  
  // { path: '', component: EquipementListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
