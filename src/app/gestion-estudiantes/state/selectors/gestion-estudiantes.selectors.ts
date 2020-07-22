import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GestionEstudiantesState } from '..';

const getEstudiantesFeature = createFeatureSelector<GestionEstudiantesState>('gestionEstudiantes');

export const getEstudiantes = createSelector(
  getEstudiantesFeature,
  state => state.estudiantes
);

export const getNuevoOEditando = createSelector(
  getEstudiantesFeature,
  state => state.nuevoOEditando
);

export const getEditandoNotas = createSelector(
  getEstudiantesFeature,
  state => state.editandoNotas
);

export const getEditandoMaterias = createSelector(
  getEstudiantesFeature,
  state => state.editandoMaterias
);

export const getNotasACambiar = createSelector(
  getEstudiantesFeature,
  state => state.notasACambiar
);

export const getEstudianteAModificar = createSelector(
  getEstudiantesFeature,
  state => state.estudianteAModificar
);

export const getEstudianteAAsignarMateria = createSelector(
  getEstudiantesFeature,
  state => state.estudianteAAgregarMateria
);

export const getMaterias = createSelector(
  getEstudiantesFeature,
  state => state.materias
);

export const getEstudianteAModificarNotas = createSelector(
  getEstudiantesFeature,
  state => state.estudianteAModificarNotas
);
