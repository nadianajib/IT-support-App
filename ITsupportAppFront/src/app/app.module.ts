import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Ajoutez FormsModule ici
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EquipmentListComponent } from './equipment/list/list.component';
import { EquipmentAddComponent } from './addequipement/addequipement.component';
import { EquipmentEditComponent } from './edit-equipement/edit-equipement.component';
import { PanneListComponent } from './panne-list/panne-list.component';
import { PanneAddComponent } from './panne-add/panne-add.component';
import { PanneEditComponent } from './panne-edit/panne-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentAddComponent,
    EquipmentListComponent,
    EquipmentEditComponent,
    PanneListComponent,
    PanneAddComponent,
    PanneEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Ajoutez FormsModule ici
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
