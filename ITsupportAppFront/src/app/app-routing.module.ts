import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipementListComponent } from './equipement/equipement.component';

const routes: Routes = [
  { path: 'equipement', component: EquipementListComponent },
  // { path: '', component: EquipementListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
