import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentListComponent } from './equipment/list/list.component';
import { EquipmentAddComponent } from './addequipement/addequipement.component';
import { EquipmentEditComponent } from './edit-equipement/edit-equipement.component';
import { PanneListComponent } from './panne-list/panne-list.component';
import { PanneAddComponent } from './panne-add/panne-add.component';
import { PanneEditComponent } from './panne-edit/panne-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/equipments', pathMatch: 'full' },
  { path: 'equipments', component: EquipmentListComponent },
  { path: 'equipments/add', component: EquipmentAddComponent },
  { path: 'equipments/edit/:id', component: EquipmentEditComponent },
  { path: 'pannes', component: PanneListComponent },
  { path: 'pannes/add', component: PanneAddComponent },
  { path: 'pannes/edit/:id', component: PanneEditComponent },
  // Autres routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
