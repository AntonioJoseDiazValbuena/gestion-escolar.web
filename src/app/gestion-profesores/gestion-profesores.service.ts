import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesores } from './gestion-profesores.models';

@Injectable()
export class GestionProfesoresService {
  constructor(private peticion: HttpClient) { }

  obtenerProfesores(): Observable<Profesores> {
    const urlObtenerProfesores = 'inserte url equisde';

    return this.peticion.get<Profesores>(urlObtenerProfesores);
  }
}
