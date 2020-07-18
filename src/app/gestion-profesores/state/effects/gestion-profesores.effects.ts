import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map } from 'rxjs/operators';

import { obtenerProfesores, obtenerProfesoresExitoso } from '../actions/gestion-profesores.actions';
import { GestionProfesoresService } from '../../gestion-profesores.service';


@Injectable()
export class GestionProfesoresEffects {
  constructor(
    private actions$: Actions,
    private gestionProfesoresService: GestionProfesoresService
  ) { }

  obtenerEstudiantes$ = createEffect(() => this.actions$.pipe(
    ofType(obtenerProfesores),
    mergeMap(() => this.gestionProfesoresService.obtenerProfesores()
      .pipe(
        map(profesores => obtenerProfesoresExitoso({ profesores }))
      ))
  ));
}
