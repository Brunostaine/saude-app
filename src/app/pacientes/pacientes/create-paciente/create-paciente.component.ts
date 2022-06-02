import { Router } from '@angular/router';
import { PacientesService } from './../../pacientes.service';
import { Component, OnInit } from '@angular/core';
import { Pacientes } from '../../pacientes';

@Component({
  selector: 'app-create-paciente',
  templateUrl: './create-paciente.component.html',
  styleUrls: ['./create-paciente.component.css']
})
export class CreatePacienteComponent implements OnInit {

  constructor(private pacientesService: PacientesService, private router: Router) { }

  paciente: Pacientes = {
    name: '',
    dataNascimento: '',
    idade: ''
  }

  ngOnInit(): void {
  }

  save(){

    this.pacientesService.create(this.paciente).subscribe((res) => {
      this.paciente = res
      this.router.navigate(['/pacientes'])
    })
      
  
}

  cancel(){
      
      this.router.navigate(['/pacientes'])
    
  }

}
