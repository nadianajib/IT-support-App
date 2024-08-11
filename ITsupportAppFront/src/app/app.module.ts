import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentListComponent } from './equipment/list/list.component';
import { ReactiveFormsModule } from '@angular/forms'; // Assurez-vous d'importer ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { EquipmentAddComponent } from './addequipement/addequipement.component';
import { EditEquipementComponent } from './edit-equipement/edit-equipement.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentListComponent,
    EquipmentAddComponent,
    EditEquipementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  // Importez ReactiveFormsModule ici
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
