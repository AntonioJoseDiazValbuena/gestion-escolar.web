import { createAction, props } from '@ngrx/store';
import { Profesores } from '../../gestion-profesores.models';

const origen = '[Profesores]';

export const obtenerProfesores = createAction(
  `${origen} Obtener profesores`
);

export const obtenerProfesoresExitoso = createAction(
  `${origen} Obtener profesores exitoso`,
  props<{ profesores: Profesores }>()
);

export const nuevoProfesor = createAction(
  `${origen} Nuevo profesor`,
);
