import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentListComponent } from './equipment/list/list.component';
import { EquipmentAddComponent } from './addequipement/addequipement.component';

const routes: Routes = [
  { path: '', redirectTo: '/equipments', pathMatch: 'full' },
  { path: 'equipments', component: EquipmentListComponent },
  { path: 'equipments/add', component: EquipmentAddComponent }  // Route pour ajouter un équipement

  
  // Autres routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
