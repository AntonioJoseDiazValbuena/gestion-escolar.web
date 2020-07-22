import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Estudiantes, Estudiante, MateriaEstudiante, MateriasEstudiantes } from '../../gestion-estudiantes.models';
import { Grupo, Materia } from 'src/app/shared/shared.models';
import { Profesor } from 'src/app/gestion-profesores/gestion-profesores.models';

@Component({
  selector: 'app-gestion-estudiantes-listado',
  templateUrl: './gestion-estudiantes-listado.component.html',
  styleUrls: ['./gestion-estudiantes-listado.component.scss']
})
export class GestionEstudiantesListadoComponent {
  @Input() estudiantes: Estudiantes = [];
  @Output() modificarNotas = new EventEmitter<{ materia: MateriaEstudiante, estudiante: Estudiante }>();
  @Output() registrarNuevaMateria = new EventEmitter<Estudiante>();
  @Output() nuevoEstudiante = new EventEmitter<void>();
  @Output() modificarNombre = new EventEmitter<Estudiante>();
  @Output() eliminarMateria = new EventEmitter<MateriaEstudiante>();
  @Output() eliminarEstudiante = new EventEmitter<Estudiante>();

  constructor() { }

  cambiarNotas(materia: MateriaEstudiante, estudiante: Estudiante) {
    this.modificarNotas.emit({ materia, estudiante });
  }

  ingresarAMateria(estudiante: Estudiante) {
    this.registrarNuevaMateria.emit(estudiante);
  }

  nuevo() {
    this.nuevoEstudiante.emit();
  }

  cambiarNombre(estudiante: Estudiante) {
    this.modificarNombre.emit(estudiante);
  }

  removerMateria(materia: MateriaEstudiante) {
    this.eliminarMateria.emit(materia);
  }

  eliminar(estudiante: Estudiante) {
    this.eliminarEstudiante.emit(estudiante);
  }
}
