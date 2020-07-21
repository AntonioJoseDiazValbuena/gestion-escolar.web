import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, switchMap } from 'rxjs/operators';

import {
  obtenerProfesores,
  obtenerProfesoresExitoso,
  obtenerMaterias,
  obtenerMateriasExitoso,
  eliminarGrupo,
  eliminarGrupoExitoso,
  cancelarFormularios,
  eliminarProfesor,
  eliminarProfesorExitoso,
  guardarProfesor,
  guardarProfesorExitoso,
  actualizarProfesor,
  agregarMateria,
  agregarMateriaExitoso
} from '../actions/gestion-profesores.actions';
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

  obtenerMaterias$ = createEffect(() => this.actions$.pipe(
    ofType(obtenerMaterias),
    mergeMap(() => this.gestionProfesoresService.obtenerMaterias()
      .pipe(
        map(materias => obtenerMateriasExitoso({ materias }))
      ))
  ));

  eliminarGrupo$ = createEffect(() => this.actions$.pipe(
    ofType(eliminarGrupo),
    mergeMap((accion) => this.gestionProfesoresService.eliminarGrupo(accion.grupo)
      .pipe(
        switchMap(() => [eliminarGrupoExitoso(), obtenerProfesores(), cancelarFormularios()])
      ))
  ));

  eliminarProfesor$ = createEffect(() => this.actions$.pipe(
    ofType(eliminarProfesor),
    mergeMap((accion) => this.gestionProfesoresService.eliminarProfesor(accion.profesor)
      .pipe(
        switchMap(() => [eliminarProfesorExitoso(), obtenerProfesores(), cancelarFormularios()])
      ))
  ));

  guardarProfesor$ = createEffect(() => this.actions$.pipe(
    ofType(guardarProfesor),
    mergeMap((accion) => this.gestionProfesoresService.agregarProfesor(accion.profesor)
      .pipe(
        switchMap(() => [guardarProfesorExitoso(), obtenerProfesores(), cancelarFormularios()])
      ))
  ));

  actualizarProfesor$ = createEffect(() => this.actions$.pipe(
    ofType(actualizarProfesor),
    mergeMap((accion) => this.gestionProfesoresService.modificarNombreProfesor(accion.profesor)
      .pipe(
        switchMap(() => [eliminarProfesorExitoso(), obtenerProfesores(), cancelarFormularios()])
      ))
  ));

  agregarMateria$ = createEffect(() => this.actions$.pipe(
    ofType(agregarMateria),
    mergeMap((accion) => this.gestionProfesoresService.asignarMateriaAProfesor(accion.grupo)
      .pipe(
        switchMap(() => [agregarMateriaExitoso(), obtenerProfesores(), cancelarFormularios()])
      ))
  ));
}
