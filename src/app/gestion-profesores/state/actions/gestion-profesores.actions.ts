import { createAction, props } from '@ngrx/store';
import { Profesores, Profesor } from '../../gestion-profesores.models';
import { Materias, Grupo } from 'src/app/shared/shared.models';

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

export const obtenerMaterias = createAction(
  `${origen} Obtener materias`
);

export const obtenerMateriasExitoso = createAction(
  `${origen} Obtener materias exitoso`,
  props<{ materias: Materias }>()
);

export const eliminarGrupo = createAction(
  `${origen} Eliminar grupo`,
  props<{ grupo: Grupo }>()
);

export const eliminarGrupoExitoso = createAction(
  `${origen} Eliminar grupo exitoso`
);

export const cancelarFormularios = createAction(
  `${origen} Cancelar formularios`
);

export const eliminarProfesor = createAction(
  `${origen} Eliminar profesor`,
  props<{ profesor: Profesor }>()
);

export const eliminarProfesorExitoso = createAction(
  `${origen} Eliminar profesor exitoso`
);

export const modificarNombre = createAction(
  `${origen} Modificar nombre profesor`,
  props<{ profesor: Profesor }>()
);

export const registrarNuevaMateria = createAction(
  `${origen} Registrar nueva materia profesor`,
  props<{ profesor: Profesor }>()
);

export const guardarProfesor = createAction(
  `${origen} Guardar profesor`,
  props<{ profesor: Profesor }>()
);

export const guardarProfesorExitoso = createAction(
  `${origen} Guardar profesor exitoso`
);

export const actualizarProfesor = createAction(
  `${origen} Actualizar profesor`,
  props<{ profesor: Profesor }>()
);

export const actualizarProfesorExitoso = createAction(
  `${origen} Actualizar profesor exitoso`
);

export const agregarMateria = createAction(
  `${origen} Agregar materia profesor`,
  props<{ grupo: Grupo }>()
);

export const agregarMateriaExitoso = createAction(
  `${origen} Agregar materia profesor exitoso`
);
