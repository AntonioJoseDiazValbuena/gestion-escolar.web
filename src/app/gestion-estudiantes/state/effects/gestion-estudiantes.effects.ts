import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, switchMap } from 'rxjs/operators';

import {
  obtenerEstudiantes,
  obtenerEstudiantesExitoso,
  guardarNotas,
  guardarNotasExitoso,
  cancelarFormularios,
  guardarEstudiante,
  guardarEstudianteExitoso,
  actualizarEstudiante,
  actualizarEstudianteExitoso,
  obtenerMaterias,
  obtenerMateriasExitoso,
  registrarMateria,
  registrarMateriaExitoso,
  eliminarMateria,
  eliminarMateriaExitoso,
  eliminarEstudiante,
  eliminarEstudianteExitoso
} from '../actions/gestion-estudiantes.actions';
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

  guardarNotas$ = createEffect(() => this.actions$.pipe(
    ofType(guardarNotas),
    mergeMap((accion) => this.gestionEstudiantesService.modificarNotasEstudiante(accion.notasAGuardar)
      .pipe(
        switchMap(() => [guardarNotasExitoso(), cancelarFormularios(), obtenerEstudiantes()])
      ))
  ));

  guardarEstudiante$ = createEffect(() => this.actions$.pipe(
    ofType(guardarEstudiante),
    mergeMap((accion) => this.gestionEstudiantesService.agregarEstudiante(accion.estudiante)
      .pipe(
        switchMap(() => [guardarEstudianteExitoso(), cancelarFormularios(), obtenerEstudiantes()])
      ))
  ));

  actualizarEstudiante$ = createEffect(() => this.actions$.pipe(
    ofType(actualizarEstudiante),
    mergeMap((accion) => this.gestionEstudiantesService.modificarNombreEstudiante(accion.estudiante)
      .pipe(
        switchMap(() => [actualizarEstudianteExitoso(), cancelarFormularios(), obtenerEstudiantes()])
      ))
  ));

  obtenerMaterias$ = createEffect(() => this.actions$.pipe(
    ofType(obtenerMaterias),
    mergeMap(() => this.gestionEstudiantesService.obtenerMaterias()
      .pipe(
        map(materias => obtenerMateriasExitoso({ materias }))
      ))
  ));

  registrarMateria$ = createEffect(() => this.actions$.pipe(
    ofType(registrarMateria),
    mergeMap((accion) => this.gestionEstudiantesService.asginarMateria(accion.materia)
      .pipe(
        switchMap(() => [registrarMateriaExitoso(), cancelarFormularios(), obtenerEstudiantes()])
      ))
  ));

  eliminarMateria$ = createEffect(() => this.actions$.pipe(
    ofType(eliminarMateria),
    mergeMap((accion) => this.gestionEstudiantesService.removerMateria(accion.materia)
      .pipe(
        switchMap(() => [eliminarMateriaExitoso(), cancelarFormularios(), obtenerEstudiantes()])
      ))
  ));

  eliminarEstudiante$ = createEffect(() => this.actions$.pipe(
    ofType(eliminarEstudiante),
    mergeMap((accion) => this.gestionEstudiantesService.eliminarEstudiante(accion.estudiante)
      .pipe(
        switchMap(() => [eliminarEstudianteExitoso(), cancelarFormularios(), obtenerEstudiantes()])
      ))
  ));
}
