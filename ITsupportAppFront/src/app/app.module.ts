import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Importez ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentAddComponent } from './addequipement/addequipement.component';
import { EquipmentListComponent } from './equipment/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { EquipmentEditComponent } from './edit-equipement/edit-equipement.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentAddComponent,
    EquipmentListComponent,
    EquipmentEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
