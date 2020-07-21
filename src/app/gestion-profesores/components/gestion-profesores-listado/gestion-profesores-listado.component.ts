import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Profesores, Profesor } from '../../gestion-profesores.models';
import { Grupo, Grupos, Materia } from 'src/app/shared/shared.models';

@Component({
  selector: 'app-gestion-profesores-listado',
  templateUrl: './gestion-profesores-listado.component.html',
  styleUrls: ['./gestion-profesores-listado.component.scss']
})
export class GestionProfesoresListadoComponent {
  @Input() profesores = [{
    grupos: [{
      materia: {} as Materia
    } as Grupo] as Grupos
  } as Profesor] as Profesores;
  @Output() nuevoProfesor = new EventEmitter<void>();
  @Output() eliminarGrupo = new EventEmitter<Grupo>();
  @Output() removerProfesor = new EventEmitter<Profesor>();
  @Output() modificarNombre = new EventEmitter<Profesor>();
  @Output() registrarNuevaMateria = new EventEmitter<Profesor>();

  constructor() { }

  registrarProfesor() {
    this.nuevoProfesor.emit();
  }

  eliminar(grupo: Grupo) {
    this.eliminarGrupo.emit(grupo);
  }

  eliminarProfesor(profesor: Profesor) {
    this.removerProfesor.emit(profesor);
  }

  cambiarNombre(profesor: Profesor) {
    this.modificarNombre.emit(profesor);
  }

  registrarMateria(profesor: Profesor) {
    this.registrarNuevaMateria.emit(profesor);
  }
}
