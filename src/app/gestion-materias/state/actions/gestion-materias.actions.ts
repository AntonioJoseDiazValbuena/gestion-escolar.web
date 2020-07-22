import { createAction, props } from '@ngrx/store';
import { Materias, Materia } from 'src/app/shared/shared.models';

const origen = '[Materias]';

export const obtenerMaterias = createAction(
  `${origen} Obtener materias`
);

export const obtenerMateriasExitoso = createAction(
  `${origen} Obtener materias exitoso`,
  props<{ materias: Materias }>()
);

export const nuevaMateria = createAction(
  `${origen} Nueva materia`
);

export const cancelarRegistro = createAction(
  `${origen} Cancelar registro de materia`
);

export const guardarMateria = createAction(
  `${origen} Guardar materia`,
  props<{ materia: Materia }>()
);

export const guardarMateriaExitoso = createAction(
  `${origen} Guardar materia exitoso`
);

export const eliminarMateria = createAction(
  `${origen} Eliminar materia`,
  props<{ materia: Materia }>()
);

export const eliminarMateriaExitoso = createAction(
  `${origen} Eliminar materia exitoso`
);
