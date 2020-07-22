import { createReducer, Action, on } from '@ngrx/store';
import {
  obtenerMateriasExitoso, nuevaMateria, cancelarRegistro
} from '../actions/gestion-materias.actions';
import { Materias, Materia } from 'src/app/shared/shared.models';

export interface GestionMateriasState {
  nuevo: boolean;
  materias: Materias;
  materiaAEliminar: Materia;
}

export interface State {
  gestionMaterias: GestionMateriasState;
}

export const initialState: GestionMateriasState = {
  nuevo: false,
  materias: [],
  materiaAEliminar: null
};

const gestionMateriasReducer = createReducer(
  initialState,
  on(obtenerMateriasExitoso, (state, accion) => ({ ...state, materias: [...accion.materias] })),
  on(nuevaMateria, (state) => ({ ...state, nuevo: true })),
  on(cancelarRegistro, (state) => ({ ...state, nuevo: false }))
);

export function reducer(state: GestionMateriasState | undefined, accion: Action) {
  return gestionMateriasReducer(state, accion);
}
