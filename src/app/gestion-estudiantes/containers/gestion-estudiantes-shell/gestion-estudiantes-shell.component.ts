import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import * as fromGestionEstudiantes from '../../state';
import { Store, select } from '@ngrx/store';
import { Estudiantes, Estudiante, MateriaEstudiante } from '../../gestion-estudiantes.models';
import { Grupos } from 'src/app/shared/shared.models';

@Component({
  selector: 'app-gestion-estudiantes-shell',
  templateUrl: './gestion-estudiantes-shell.component.html',
  styleUrls: ['./gestion-estudiantes-shell.component.scss']
})
export class GestionEstudiantesShellComponent implements OnInit {
  nuevoOEditando$: Observable<boolean>;
  editandoNotas$: Observable<boolean>;
  editandoMaterias$: Observable<boolean>;
  estudiantes$: Observable<Estudiantes>;
  notasACambiar$: Observable<MateriaEstudiante>;
  estudianteAModificar$: Observable<Estudiante>;
  estudianteAAsignarMateria$: Observable<Estudiante>;
  materias$: Observable<Grupos>;
  estudianteAModificarNotas$: Observable<Estudiante>;

  constructor(
    private store: Store<fromGestionEstudiantes.State>
  ) { }

  ngOnInit() {
    this.ejecutarAcciones();
    this.iniciarObtencionStore();
  }

  iniciarObtencionStore() {
    this.nuevoOEditando$ = this.store.pipe(select(fromGestionEstudiantes.getNuevoOEditando));
    this.editandoNotas$ = this.store.pipe(select(fromGestionEstudiantes.getEditandoNotas));
    this.editandoMaterias$ = this.store.pipe(select(fromGestionEstudiantes.getEditandoMaterias));
    this.estudiantes$ = this.store.pipe(select(fromGestionEstudiantes.getEstudiantes));
    this.notasACambiar$ = this.store.pipe(select(fromGestionEstudiantes.getNotasACambiar));
    this.estudianteAModificar$ = this.store.pipe(select(fromGestionEstudiantes.getEstudianteAModificar));
    this.materias$ = this.store.pipe(select(fromGestionEstudiantes.getMaterias));
    this.estudianteAAsignarMateria$ = this.store.pipe(select(fromGestionEstudiantes.getEstudianteAAsignarMateria));
    this.estudianteAModificarNotas$ = this.store.pipe(select(fromGestionEstudiantes.getEstudianteAModificarNotas));
  }

  ejecutarAcciones() {
    this.store.dispatch(fromGestionEstudiantes.obtenerEstudiantes());
    this.store.dispatch(fromGestionEstudiantes.obtenerMaterias());
  }

  modificarNotas(evento: { materia: MateriaEstudiante, estudiante: Estudiante }) {
    this.store.dispatch(fromGestionEstudiantes.modificarNotas({ materia: evento.materia, estudiante: evento.estudiante }));
  }

  guardarNotas(notasAGuardar: MateriaEstudiante) {
    this.store.dispatch(fromGestionEstudiantes.guardarNotas({ notasAGuardar }));
  }

  cancelarFormularios() {
    this.store.dispatch(fromGestionEstudiantes.cancelarFormularios());
  }

  guardarEstudiante(estudiante: Estudiante) {
    this.store.dispatch(fromGestionEstudiantes.guardarEstudiante({ estudiante }));
  }

  actualizarEstudiante(estudiante: Estudiante) {
    this.store.dispatch(fromGestionEstudiantes.actualizarEstudiante({ estudiante }));
  }

  ingresarAMateria(estudiante: Estudiante) {
    this.store.dispatch(fromGestionEstudiantes.ingresarAMateria({ estudiante }));
  }

  agregarMateria(materia: MateriaEstudiante) {
    this.store.dispatch(fromGestionEstudiantes.registrarMateria({ materia }));
  }

  nuevoEstudiante() {
    this.store.dispatch(fromGestionEstudiantes.nuevoEstudiante());
  }

  modificarNombre(estudiante: Estudiante) {
    this.store.dispatch(fromGestionEstudiantes.modificarNombre({ estudiante }));
  }

  eliminarMateria(materia: MateriaEstudiante) {
    this.store.dispatch(fromGestionEstudiantes.eliminarMateria({ materia }));
  }

  eliminarEstudiante(estudiante: Estudiante) {
    this.store.dispatch(fromGestionEstudiantes.eliminarEstudiante({ estudiante }));
  }
}
