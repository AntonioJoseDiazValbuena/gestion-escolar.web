import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Estudiantes, Estudiante, MateriaEstudiante } from '../../gestion-estudiantes.models';

@Component({
  selector: 'app-gestion-estudiantes-listado',
  templateUrl: './gestion-estudiantes-listado.component.html',
  styleUrls: ['./gestion-estudiantes-listado.component.scss']
})
export class GestionEstudiantesListadoComponent {
  @Input() estudiantes: Estudiantes;
  @Output() modificarNotas = new EventEmitter<MateriaEstudiante>();
  @Output() registrarNuevaMateria = new EventEmitter<Estudiante>();
  @Output() nuevoEstudiante = new EventEmitter<void>();
  @Output() modificarNombre = new EventEmitter<Estudiante>();
  @Output() eliminarMateria = new EventEmitter<MateriaEstudiante>();
  @Output() eliminarEstudiante = new EventEmitter<Estudiante>();

  constructor() { }

  cambiarNotas(materia: MateriaEstudiante) {
    this.modificarNotas.emit(materia);
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
