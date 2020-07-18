import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiantes } from './gestion-estudiantes.models';

@Injectable()
export class GestionEstudiantesService {
  constructor(private peticion: HttpClient) { }

  obtenerEstudiantes(): Observable<Estudiantes> {
    const urlObtenerEstudiantes = 'inserte url equisde';

    return this.peticion.get<Estudiantes>(urlObtenerEstudiantes);
  }
}
