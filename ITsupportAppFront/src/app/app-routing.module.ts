import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentListComponent } from './equipment/list/list.component';
import { EquipmentAddComponent } from './addequipement/addequipement.component';
import { EquipmentEditComponent } from './edit-equipement/edit-equipement.component'; // Importez le composant d'édition

const routes: Routes = [
  { path: '', redirectTo: '/equipments', pathMatch: 'full' },
  { path: 'equipments', component: EquipmentListComponent },
  { path: 'equipments/add', component: EquipmentAddComponent },
  { path: 'equipments/edit/:id', component: EquipmentEditComponent }, // Correction ici

  // Autres routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
