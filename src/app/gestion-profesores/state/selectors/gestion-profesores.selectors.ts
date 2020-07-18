import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GestionProfesoresState } from '..';

const getProfesoresFeature = createFeatureSelector<GestionProfesoresState>('gestionProfesores');

export const getProfesores = createSelector(
  getProfesoresFeature,
  state => state.profesores
);

export const getNuevoProfesor = createSelector(
  getProfesoresFeature,
  state => state.nuevoProfesor
);

