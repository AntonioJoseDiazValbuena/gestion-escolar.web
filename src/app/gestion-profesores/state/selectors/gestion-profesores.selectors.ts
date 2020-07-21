import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GestionProfesoresState } from '..';

const getProfesoresFeature = createFeatureSelector<GestionProfesoresState>('gestionProfesores');

export const getProfesores = createSelector(
  getProfesoresFeature,
  state => state.profesores
);

export const getNuevoOEditando = createSelector(
  getProfesoresFeature,
  state => state.nuevoOEditando
);

export const getMaterias = createSelector(
  getProfesoresFeature,
  state => state.materias
);

export const getProfesorAModificar = createSelector(
  getProfesoresFeature,
  state => state.profesorAModificar
);

export const getEditandoMaterias = createSelector(
  getProfesoresFeature,
  state => state.editandoMaterias
);

export const getProfesorAAgregarMateria = createSelector(
  getProfesoresFeature,
  state => state.profesorAAGregarMateria
);
