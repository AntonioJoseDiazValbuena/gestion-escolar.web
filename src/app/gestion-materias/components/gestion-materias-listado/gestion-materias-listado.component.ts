import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Materias, Materia } from 'src/app/shared/shared.models';

@Component({
  selector: 'app-gestion-materias-listado',
  templateUrl: './gestion-materias-listado.component.html',
  styleUrls: ['./gestion-materias-listado.component.scss']
})
export class GestionMateriasListadoComponent {
  @Input() materias = [{} as Materia] as Materias
  @Output() nuevaMateria = new EventEmitter<void>();
  @Output() eliminarMateria = new EventEmitter<Materia>();

  constructor() { }

  registrarMateria() {
    this.nuevaMateria.emit();
  }

  eliminar(materia: Materia) {
    this.eliminarMateria.emit(materia);
  }
}
