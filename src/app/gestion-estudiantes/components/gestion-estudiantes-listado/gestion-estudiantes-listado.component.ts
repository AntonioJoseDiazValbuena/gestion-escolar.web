import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Estudiantes, Estudiante } from '../../gestion-estudiantes.models';

@Component({
  selector: 'app-gestion-estudiantes-listado',
  templateUrl: './gestion-estudiantes-listado.component.html',
  styleUrls: ['./gestion-estudiantes-listado.component.scss']
})
export class GestionEstudiantesListadoComponent {
  @Input() estudiantes: Estudiantes;
  @Output() modificarPrimerPeriodo = new EventEmitter<Estudiante>();
  @Output() modificarSegundoPeriodo = new EventEmitter<Estudiante>();
  @Output() modificarTercerPeriodo = new EventEmitter<Estudiante>();

  constructor() { }

  modificarNotaPrimerPeriodo(estudiante) {
    this.modificarPrimerPeriodo.emit(estudiante);
  }

  modificarNotaSegundoPeriodo(estudiante) {
    this.modificarSegundoPeriodo.emit(estudiante);
  }

  modificarNotaTercerPeriodo(estudiante) {
    this.modificarTercerPeriodo.emit(estudiante);
  }
}
