import { PacientesService } from './../pacientes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pacientes } from '../pacientes';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

    paciente: Pacientes = {
        name: '',
        dataNascimento: '',
        idade: ''
    }

constructor(private PacientesService: PacientesService, private route: ActivatedRoute) { }

ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.PacientesService.readId(id).subscribe(res => {
        this.paciente = res;
    })
}

}
