import { ActivatedRoute } from '@angular/router';
import { PacientesService } from './../../pacientes.service';
import { Pacientes } from './../../pacientes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {
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
