import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Materias, Materia } from 'src/app/shared/shared.models';

import * as fromGestionMaterias from '../../state';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-gestion-materias-shell',
  templateUrl: './gestion-materias-shell.component.html',
  styleUrls: ['./gestion-materias-shell.component.scss']
})
export class GestionMateriasShellComponent implements OnInit {
  nuevo$: Observable<boolean>;
  materias$: Observable<Materias>;

  constructor(
    private store: Store<fromGestionMaterias.State>
  ) { }

  ngOnInit() {
    this.ejecutarAcciones();
    this.iniciarObtencionStore();
  }

  ejecutarAcciones() {
    this.store.dispatch(fromGestionMaterias.obtenerMaterias());
  }

  iniciarObtencionStore() {
    this.nuevo$ = this.store.pipe(select(fromGestionMaterias.getNuevo));
    this.materias$ = this.store.pipe(select(fromGestionMaterias.getMaterias));
  }

  nuevaMateria() {
    this.store.dispatch(fromGestionMaterias.nuevaMateria());
  }

  cancelarRegistro() {
    this.store.dispatch(fromGestionMaterias.cancelarRegistro());
  }

  guardarMateria(materia: Materia) {
    this.store.dispatch(fromGestionMaterias.guardarMateria({ materia }));
  }

  eliminarMateria(materia: Materia) {
    this.store.dispatch(fromGestionMaterias.eliminarMateria({ materia }));
  }
}
