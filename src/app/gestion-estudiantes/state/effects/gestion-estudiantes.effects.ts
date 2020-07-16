import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map } from 'rxjs/operators';

import { obtenerEstudiantes, obtenerEstudiantesExitoso } from '../actions/gestion-estudiantes.actions';
import { GestionEstudiantesService } from '../../gestion-estudiantes.service';


@Injectable()
export class GestionEstudiantesEffects {
  constructor(
    private actions$: Actions,
    private gestionEstudiantesService: GestionEstudiantesService
  ) { }

  obtenerEstudiantes$ = createEffect(() => this.actions$.pipe(
    ofType(obtenerEstudiantes),
    mergeMap(() => this.gestionEstudiantesService.obtenerEstudiantes()
      .pipe(
        map(estudiantes => obtenerEstudiantesExitoso({ estudiantes }))
      ))
  ));
}
