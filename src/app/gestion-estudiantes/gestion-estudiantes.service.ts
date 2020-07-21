import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiantes, Estudiante, MateriaEstudiante } from './gestion-estudiantes.models';
import { environment } from 'src/environments/environment';
import { Grupos } from '../shared/shared.models';

@Injectable()
export class GestionEstudiantesService {
  urlEstudiantes = `${environment.urlBase}Estudiantes/`;
  urlMaterias = `${this.urlEstudiantes}Materias/`;

  constructor(private peticion: HttpClient) { }

  obtenerEstudiantes(): Observable<Estudiantes> {
    return this.peticion.get<Estudiantes>(this.urlEstudiantes);
  }

  obtenerMaterias(): Observable<Grupos> {
    return this.peticion.get<Grupos>(this.urlMaterias);
  }

  agregarEstudiante(estudiante: Estudiante): Observable<void> {
    return this.peticion.post<void>(this.urlEstudiantes, estudiante);
  }

  modificarNotasEstudiante(notas: MateriaEstudiante): Observable<void> {
    const urlModificarNotas = `${this.urlMaterias}Calificaciones`;

    return this.peticion.put<void>(urlModificarNotas, notas);
  }

  asginarMateria(materia: MateriaEstudiante): Observable<void> {
    return this.peticion.put<void>(this.urlMaterias, materia);
  }

  removerMateria(materia: MateriaEstudiante): Observable<void> {
    const urlRemoverMateria = `${this.urlMaterias}Remover`;

    return this.peticion.put<void>(urlRemoverMateria, materia);
  }

  modificarNombreEstudiante(estudiante: Estudiante): Observable<void> {
    return this.peticion.put<void>(this.urlEstudiantes, estudiante);
  }

  eliminarEstudiante(estudiante: Estudiante): Observable<void> {
    const urlEliminarEstudiante = this.urlEstudiantes + estudiante.tarjetaIdentidad;

    return this.peticion.delete<void>(urlEliminarEstudiante);
  }
}
