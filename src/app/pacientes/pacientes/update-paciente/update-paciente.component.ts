import { Router, ActivatedRoute } from '@angular/router';
import { PacientesService } from './../../pacientes.service';
import { Pacientes } from './../../pacientes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-paciente',
  templateUrl: './update-paciente.component.html',
  styleUrls: ['./update-paciente.component.css']
})
export class UpdatePacienteComponent implements OnInit {
    paciente: Pacientes = {
        name: '',
        dataNascimento: '',
        idade: ''
        }

    constructor(private pacientesService: PacientesService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pacientesService.readId(id).subscribe( res => {
        this.paciente = res
    })
    }





    update(){
    this.pacientesService.update(this.paciente).subscribe( () => {
        this.router.navigate(['/pacientes'])
    })
    alert('Paciente atualizado com sucesso!')
    }

    cancel(){
        
        this.router.navigate(['/pacientes'])

    }

}
