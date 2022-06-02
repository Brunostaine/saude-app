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

    lista(): Observable<Pacientes[]> {
    return this.http.get<Pacientes[]>(this.urlBase)
    }

    readId(id: any): Observable<Pacientes> {
        const url = `${this.urlBase}/${id}`;
        return this.http.get<Pacientes>(url)
    }

    create(paciete: Pacientes): Observable<Pacientes> {
        return this.http.post<Pacientes>(this.urlBase, paciete);
    }

    

}
