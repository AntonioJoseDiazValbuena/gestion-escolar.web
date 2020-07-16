import { createReducer, Action, on } from '@ngrx/store';
import { obtenerEstudiantesExitoso } from '../actions/gestion-estudiantes.actions';
import { Estudiantes } from '../../gestion-estudiantes.models';

export interface GestionEstudiantesState {
  estudiantes: Estudiantes;
  nuevo: boolean;
  editandoNotas: boolean;
  editandoMaterias: boolean;
}

export interface State {
  gestionEstudiantes: GestionEstudiantesState;
}

export const initialState: GestionEstudiantesState = {
  estudiantes: [],
  nuevo: false,
  editandoNotas: false,
  editandoMaterias: false
};

const gestionEstudiantesReducer = createReducer(
  initialState,
  on(obtenerEstudiantesExitoso, (state, accion) => ({ ...state, estudiantes: [...accion.estudiantes] }))
);

export function reducer(state: GestionEstudiantesState | undefined, accion: Action) {
  return gestionEstudiantesReducer(state, accion);
}
