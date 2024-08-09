import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EquipementComponent } from './equipement/equipement.component';
import { PanneComponent } from './panne/panne.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    EquipementComponent,
    PanneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
