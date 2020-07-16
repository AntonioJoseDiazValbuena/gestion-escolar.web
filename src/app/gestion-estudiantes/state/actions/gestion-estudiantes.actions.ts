import { createAction, props } from '@ngrx/store';
import { Estudiantes } from '../../gestion-estudiantes.models';

const origen = '[Estudiantes]';

export const obtenerEstudiantes = createAction(
  `${origen} Obtener estudiantes`
);

export const obtenerEstudiantesExitoso = createAction(
  `${origen} Obtener estudiantes`,
  props<{ estudiantes: Estudiantes }>()
);
