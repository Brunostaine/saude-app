import { Component, OnInit } from '@angular/core';

import { Pacientes } from './pacientes';
import { PacientesService } from './pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {


    pacientes: Pacientes[] = []
    displayedColumns: string[] = ['id', 'name', 'acoes'];


    constructor(private pacientesService: PacientesService) { }

    ngOnInit(): void {
    this.pacientesService.lista().subscribe((result) => {
        this.pacientes = result;
    })
    }

}
