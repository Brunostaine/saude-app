import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { HomeComponent } from './home/home.component';
import { UpdatePacienteComponent } from './pacientes/update-paciente/update-paciente.component';
import { PacienteComponent } from './pacientes/paciente/paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    HomeComponent,
    UpdatePacienteComponent,
    PacienteComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
