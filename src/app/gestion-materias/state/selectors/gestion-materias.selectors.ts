import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GestionMateriasState } from '..';

const getMateriasFeature = createFeatureSelector<GestionMateriasState>('gestionMaterias');

export const getNuevo = createSelector(
  getMateriasFeature,
  state => state.nuevo
);

export const getMaterias = createSelector(
  getMateriasFeature,
  state => state.materias
);
