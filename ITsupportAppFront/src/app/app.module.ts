import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EquipmentListComponent } from './equipment/list/list.component';
import { EquipmentAddComponent } from './addequipement/addequipement.component';
import { EquipmentEditComponent } from './edit-equipement/edit-equipement.component';
import { PanneListComponent } from './panne-list/panne-list.component';
import { PanneAddComponent } from './panne-add/panne-add.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentAddComponent,
    EquipmentListComponent,
    EquipmentEditComponent,
    PanneListComponent,
    PanneAddComponent
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
