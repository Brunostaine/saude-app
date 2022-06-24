import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pacientes } from './pacientes';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

    

    urlBase = `${environment.apiUrl}pacientes`

    constructor(private http: HttpClient) { }

    lista(): Observable<Pacientes[]> {
    return this.http.get<Pacientes[]>(this.urlBase)
    }

    readId(id: any): Observable<Pacientes> {
        const url = `${this.urlBase}/paciente/${id}`;
        return this.http.get<Pacientes>(url)
    }

    create(paciete: Pacientes): Observable<Pacientes> {
        return this.http.post<Pacientes>(this.urlBase, paciete);
    }

    delete(id: any): Observable<Pacientes> {
        const url = `${this.urlBase}/${id}`;
        return this.http.delete<Pacientes>(url)
    }

    update(paciente: Pacientes): Observable<Pacientes> {
        const url = `${this.urlBase}/${paciente.id}`;
        return this.http.put<Pacientes>(url, paciente);
    }

}
