import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromGestionProfesores from '../../state';
import { Observable } from 'rxjs';
import { Profesores, Profesor } from '../../gestion-profesores.models';
import { Materias, Grupo } from 'src/app/shared/shared.models';

@Component({
  selector: 'app-gestion-profesores-shell',
  templateUrl: './gestion-profesores-shell.component.html',
  styleUrls: ['./gestion-profesores-shell.component.scss']
})
export class GestionProfesoresShellComponent implements OnInit {
  nuevoOEditando$: Observable<boolean>;
  profesores$: Observable<Profesores>;
  materias$: Observable<Materias>;
  profesorAModificar$: Observable<Profesor>;
  editandoMaterias$: Observable<boolean>;
  profesorAAgregarMateria$: Observable<Profesor>;

  constructor(
    private store: Store<fromGestionProfesores.State>
  ) { }

  ngOnInit() {
    this.ejecutarAcciones();
    this.iniciarObtencionStore();
  }

  iniciarObtencionStore() {
    this.nuevoOEditando$ = this.store.pipe(select(fromGestionProfesores.getNuevoOEditando));
    this.profesores$ = this.store.pipe(select(fromGestionProfesores.getProfesores));
    this.materias$ = this.store.pipe(select(fromGestionProfesores.getMaterias));
    this.profesorAModificar$ = this.store.pipe(select(fromGestionProfesores.getProfesorAModificar));
    this.editandoMaterias$ = this.store.pipe(select(fromGestionProfesores.getEditandoMaterias));
    this.profesorAAgregarMateria$ = this.store.pipe(select(fromGestionProfesores.getProfesorAAgregarMateria));
  }

  ejecutarAcciones() {
    this.store.dispatch(fromGestionProfesores.obtenerProfesores());
    this.store.dispatch(fromGestionProfesores.obtenerMaterias());
  }

  nuevoProfesor() {
    this.store.dispatch(fromGestionProfesores.nuevoProfesor());
  }

  eliminarGrupo(grupo: Grupo) {
    this.store.dispatch(fromGestionProfesores.eliminarGrupo({ grupo }));
  }

  removerProfesor(profesor: Profesor) {
    this.store.dispatch(fromGestionProfesores.eliminarProfesor({ profesor }));
  }

  modificarNombre(profesor: Profesor) {
    this.store.dispatch(fromGestionProfesores.modificarNombre({ profesor }));
  }

  registrarNuevaMateria(profesor: Profesor) {
    this.store.dispatch(fromGestionProfesores.registrarNuevaMateria({ profesor }));
  }

  guardarProfesor(profesor: Profesor) {
    this.store.dispatch(fromGestionProfesores.guardarProfesor({ profesor }));
  }

  actualizarProfesor(profesor: Profesor) {
    this.store.dispatch(fromGestionProfesores.actualizarProfesor({ profesor }));
  }

  cancelarRegistros() {
    this.store.dispatch(fromGestionProfesores.cancelarFormularios());
  }

  agregarMateria(grupo: Grupo) {
    this.store.dispatch(fromGestionProfesores.agregarMateria({ grupo }));
  }
}
