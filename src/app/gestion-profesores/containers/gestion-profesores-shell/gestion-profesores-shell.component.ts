import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromGestionProfesores from '../../state';
import { Observable } from 'rxjs';
import { Profesores } from '../../gestion-profesores.models';

@Component({
  selector: 'app-gestion-profesores-shell',
  templateUrl: './gestion-profesores-shell.component.html',
  styleUrls: ['./gestion-profesores-shell.component.scss']
})
export class GestionProfesoresShellComponent implements OnInit {
  nuevoProfesor$: Observable<boolean>;
  profesores$: Observable<Profesores>;

  constructor(
    private store: Store<fromGestionProfesores.State>
  ) { }

  ngOnInit() {
    this.ejecutarAcciones();
    this.iniciarObtencionStore();
  }

  iniciarObtencionStore() {
    this.nuevoProfesor$ = this.store.pipe(select(fromGestionProfesores.getNuevoProfesor));
    this.profesores$ = this.store.pipe(select(fromGestionProfesores.getProfesores));
  }

  ejecutarAcciones() {
    this.store.dispatch(fromGestionProfesores.obtenerProfesores());
  }

  nuevoProfesor() {
    this.store.dispatch(fromGestionProfesores.nuevoProfesor());
  }
}
