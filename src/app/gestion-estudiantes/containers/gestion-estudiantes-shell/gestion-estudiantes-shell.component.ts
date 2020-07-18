import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import * as fromGestionEstudiantes from '../../state';
import { Store, select } from '@ngrx/store';
import { Estudiantes, Estudiante } from '../../gestion-estudiantes.models';

@Component({
  selector: 'app-gestion-estudiantes-shell',
  templateUrl: './gestion-estudiantes-shell.component.html',
  styleUrls: ['./gestion-estudiantes-shell.component.scss']
})
export class GestionEstudiantesShellComponent implements OnInit {
  nuevo$: Observable<boolean>;
  editandoNotas$: Observable<boolean>;
  editandoMaterias$: Observable<boolean>;
  estudiantes$: Observable<Estudiantes>;

  constructor(
    private store: Store<fromGestionEstudiantes.State>
  ) { }

  ngOnInit() {
    this.ejecutarAcciones();
    this.iniciarObtencionStore();
  }

  iniciarObtencionStore() {
    this.nuevo$ = this.store.pipe(select(fromGestionEstudiantes.getNuevo));
    this.editandoNotas$ = this.store.pipe(select(fromGestionEstudiantes.getEditandoNotas));
    this.editandoMaterias$ = this.store.pipe(select(fromGestionEstudiantes.getEditandoMaterias));
    this.estudiantes$ = this.store.pipe(select(fromGestionEstudiantes.getEstudiantes));
  }

  ejecutarAcciones() {
    this.store.dispatch(fromGestionEstudiantes.obtenerEstudiantes());
  }

  modificarPrimerPeriodo(estudiante: Estudiante) {
    // this.store.dispatch(fromGestionEstudiantes.)
  }

  modificarSegundoPeriodo(estudiante: Estudiante) {

  }

  modificarTercerPeriodo(estudiante: Estudiante) {

  }
}
