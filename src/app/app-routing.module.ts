import { CreatePacienteComponent } from './pacientes/pacientes/create-paciente/create-paciente.component';
import { PacienteComponent } from './pacientes/paciente/paciente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { UpdatePacienteComponent } from './pacientes/pacientes/update-paciente/update-paciente.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'pacientes', component: PacientesComponent},
    {path: 'pacientes/create', component: CreatePacienteComponent},
    {path: 'pacientes/paciente/:id', component: PacienteComponent},
    {path: 'pacientes/update/:id', component: UpdatePacienteComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
