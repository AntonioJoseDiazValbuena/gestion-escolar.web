import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import * as fromGestionEstudiantes from '../../state';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-gestion-estudiantes-shell',
  templateUrl: './gestion-estudiantes-shell.component.html',
  styleUrls: ['./gestion-estudiantes-shell.component.scss']
})
export class GestionEstudiantesShellComponent implements OnInit {
  nuevo$: Observable<boolean>;
  editandoNotas$: Observable<boolean>;
  editandoMaterias$: Observable<boolean>;

  constructor(
    private store: Store<fromGestionEstudiantes.State>
  ) { }

  ngOnInit() {
    this.iniciarObtencionStore();
  }

  iniciarObtencionStore() {
    this.nuevo$ = this.store.pipe(select(fromGestionEstudiantes.getNuevo));
    this.editandoNotas$ = this.store.pipe(select(fromGestionEstudiantes.getEditandoNotas));
    this.editandoMaterias$ = this.store.pipe(select(fromGestionEstudiantes.getEditandoMaterias));
  }
}
