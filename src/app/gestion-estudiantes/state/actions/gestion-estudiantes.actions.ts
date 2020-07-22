import { createAction, props } from '@ngrx/store';
import { Estudiantes, Estudiante, MateriaEstudiante } from '../../gestion-estudiantes.models';
import { Grupos } from 'src/app/shared/shared.models';

const origen = '[Estudiantes]';

export const obtenerEstudiantes = createAction(
  `${origen} Obtener estudiantes`
);

export const obtenerEstudiantesExitoso = createAction(
  `${origen} Obtener estudiantes exitoso`,
  props<{ estudiantes: Estudiantes }>()
);

export const modificarNotas = createAction(
  `${origen} Modificar notas`,
  props<{ materia: MateriaEstudiante, estudiante: Estudiante }>()
);

export const guardarNotas = createAction(
  `${origen} Guardar notas`,
  props<{ notasAGuardar: MateriaEstudiante }>()
);

export const guardarNotasExitoso = createAction(
  `${origen} Guardar notas exitoso`
);

export const cancelarFormularios = createAction(
  `${origen} Cancelar la edicion o registro de estudiantes`
);

export const guardarEstudiante = createAction(
  `${origen} Guardar nuevo estudiante`,
  props<{ estudiante: Estudiante }>()
);

export const guardarEstudianteExitoso = createAction(
  `${origen} Guardar nuevo estudiante exitoso`
);

export const actualizarEstudiante = createAction(
  `${origen} Actualizar estudiante`,
  props<{ estudiante: Estudiante }>()
);

export const actualizarEstudianteExitoso = createAction(
  `${origen} Actualizar estudiante exitoso`
);

export const ingresarAMateria = createAction(
  `${origen} Ingresar estudiante a materia`,
  props<{ estudiante: Estudiante }>()
);

export const obtenerMaterias = createAction(
  `${origen} Obtener materias estudiante`
);

export const obtenerMateriasExitoso = createAction(
  `${origen} Obtener materias estudiante exitoso`,
  props<{ materias: Grupos }>()
);

export const registrarMateria = createAction(
  `${origen} Registrar materia estudiante`,
  props<{ materia: MateriaEstudiante }>()
);

export const registrarMateriaExitoso = createAction(
  `${origen} Registrar materia estudiante exitoso`
);

export const nuevoEstudiante = createAction(
  `${origen} Nuevo estudiante`
);

export const modificarNombre = createAction(
  `${origen} Modificar nombre de estudiante`,
  props<{ estudiante: Estudiante }>()
);

export const eliminarMateria = createAction(
  `${origen} Eliminar materia de estudiante`,
  props<{ materia: MateriaEstudiante }>()
);

export const eliminarMateriaExitoso = createAction(
  `${origen} Eliminar materia de estudiante exitoso`
);

export const eliminarEstudiante = createAction(
  `${origen} Eliminar estudiante`,
  props<{ estudiante: Estudiante }>()
);

export const eliminarEstudianteExitoso = createAction(
  `${origen} Eliminar estudiante exitoso`
);
