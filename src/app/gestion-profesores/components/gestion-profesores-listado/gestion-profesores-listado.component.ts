import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Profesores } from '../../gestion-profesores.models';

@Component({
  selector: 'app-gestion-profesores-listado',
  templateUrl: './gestion-profesores-listado.component.html',
  styleUrls: ['./gestion-profesores-listado.component.scss']
})
export class GestionProfesoresListadoComponent {
  @Input() profesores: Profesores;
  @Output() nuevoProfesor = new EventEmitter<void>();

  constructor() { }

  registrarProfesor() {
    this.nuevoProfesor.emit();
  }
}
