import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, switchMap } from 'rxjs/operators';
import { GestionMateriasService } from '../../gestion-materias.service';
import {
  guardarMateria,
  cancelarRegistro,
  guardarMateriaExitoso,
  eliminarMateria,
  eliminarMateriaExitoso,
  obtenerMaterias,
  obtenerMateriasExitoso
} from '../actions/gestion-materias.actions';

@Injectable()
export class GestionMateriasEffects {
  constructor(
    private actions$: Actions,
    private gestionMateriasService: GestionMateriasService
  ) { }

  obtenerMaterias$ = createEffect(() => this.actions$.pipe(
    ofType(obtenerMaterias),
    mergeMap(() => this.gestionMateriasService.obtenerMaterias()
      .pipe(
        map(materias => obtenerMateriasExitoso({ materias }))
      ))
  ));

  guardarMateria$ = createEffect(() => this.actions$.pipe(
    ofType(guardarMateria),
    mergeMap((accion) => this.gestionMateriasService.agregarMateria(accion.materia)
      .pipe(
        switchMap(() => [guardarMateriaExitoso(), obtenerMaterias(), cancelarRegistro()])
      ))
  ));

  eliminarMateria$ = createEffect(() => this.actions$.pipe(
    ofType(eliminarMateria),
    mergeMap((accion) => this.gestionMateriasService.eliminarMateria(accion.materia)
      .pipe(
        switchMap(() => [eliminarMateriaExitoso(), obtenerMaterias(), cancelarRegistro()])
      ))
  ));
}
