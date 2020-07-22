import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesores, Profesor } from './gestion-profesores.models';
import { environment } from 'src/environments/environment';
import { Grupo, Materias } from '../shared/shared.models';

@Injectable()
export class GestionProfesoresService {
  constructor(private peticion: HttpClient) { }

  urlProfesores = `${environment.urlBase}Profesores/`;
  urlMaterias = `${this.urlProfesores}Materias/`;

  obtenerProfesores(): Observable<Profesores> {
    return this.peticion.get<Profesores>(this.urlProfesores);
  }

  agregarProfesor(profesor: Profesor): Observable<void> {
    return this.peticion.post<void>(this.urlProfesores, profesor);
  }

  modificarNombreProfesor(profesor: Profesor): Observable<void> {
    return this.peticion.put<void>(this.urlProfesores, profesor);
  }

  eliminarProfesor(profesor: Profesor): Observable<void> {
    const urlEliminarProfesor = this.urlProfesores + profesor.cedula;

    return this.peticion.delete<void>(urlEliminarProfesor);
  }

  asignarMateriaAProfesor(grupo: Grupo): Observable<void> {
    return this.peticion.put<void>(this.urlMaterias, grupo);
  }

  eliminarGrupo(grupo: Grupo): Observable<void> {
    const urlEliminarGrupo = `${this.urlMaterias}Remover`;

    return this.peticion.put<void>(urlEliminarGrupo, grupo.id);
  }

  obtenerMaterias(): Observable<Materias> {
    const urlObtenerMaterias = `${environment.urlBase}Materias`

    return this.peticion.get<Materias>(urlObtenerMaterias);
  }
}
