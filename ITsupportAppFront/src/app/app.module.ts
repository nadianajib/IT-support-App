import { ReactiveFormsModule } from '@angular/forms';
import { EquipmentEditComponent } from './edit-equipement/edit-equipement.component';
import { PanneListComponent } from './panne-list/panne-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { EquipmentListComponent } from './equipment/list/list.component';
import { EquipmentAddComponent } from './addequipement/addequipement.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentAddComponent,
    EquipmentListComponent,
    EquipmentEditComponent,
    PanneListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
