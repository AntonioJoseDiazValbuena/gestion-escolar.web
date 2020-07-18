import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GestionEstudiantesState } from '..';

const getEstudiantesFeature = createFeatureSelector<GestionEstudiantesState>('gestionEstudiantes');

export const getEstudiantes = createSelector(
  getEstudiantesFeature,
  state => state.estudiantes
);

export const getNuevo = createSelector(
  getEstudiantesFeature,
  state => state.nuevo
);

export const getEditandoNotas = createSelector(
  getEstudiantesFeature,
  state => state.editandoNotas
);

export const getEditandoMaterias = createSelector(
  getEstudiantesFeature,
  state => state.editandoMaterias
);
