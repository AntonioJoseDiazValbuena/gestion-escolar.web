import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Materia, Materias } from '../shared/shared.models';

@Injectable()
export class GestionMateriasService {
  constructor(private peticion: HttpClient) { }

  urlMaterias = `${environment.urlBase}Materias/`;

  obtenerMaterias(): Observable<Materias> {
    return this.peticion.get<Materias>(this.urlMaterias);
  }

  agregarMateria(materia: Materia): Observable<void> {
    return this.peticion.post<void>(this.urlMaterias, materia);
  }

  eliminarMateria(materia: Materia): Observable<void> {
    const urlEliminarMateria = this.urlMaterias + materia.id;

    return this.peticion.delete<void>(urlEliminarMateria);
  }
}
