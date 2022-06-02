import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pacientes } from './pacientes';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

    urlBase = 'http://localhost:3020/pacientes'

    constructor(private http: HttpClient) { }

    read(): Observable<Pacientes[]> {
    return this.http.get<Pacientes[]>(this.urlBase)
    }

    

}
