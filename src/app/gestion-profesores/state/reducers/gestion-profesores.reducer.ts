import { createReducer, Action, on } from '@ngrx/store';
import { obtenerProfesoresExitoso, nuevoProfesor } from '../actions/gestion-profesores.actions';
import { Profesores } from '../../gestion-profesores.models';

export interface GestionProfesoresState {
  profesores: Profesores;
  nuevoProfesor: boolean;
  editandoNotas: boolean;
  editandoMaterias: boolean;
}

export interface State {
  gestionProfesores: GestionProfesoresState;
}

export const initialState: GestionProfesoresState = {
  profesores: [],
  nuevoProfesor: false,
  editandoNotas: false,
  editandoMaterias: false
};

const gestionProfesoresReducer = createReducer(
  initialState,
  on(obtenerProfesoresExitoso, (state, accion) => ({ ...state, profesores: [...accion.profesores] })),
  on(nuevoProfesor, (state) => ({ ...state, nuevoProfesor: true }))
);

export function reducer(state: GestionProfesoresState | undefined, accion: Action) {
  return gestionProfesoresReducer(state, accion);
}
