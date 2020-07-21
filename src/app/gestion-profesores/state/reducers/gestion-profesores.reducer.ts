import { createReducer, Action, on } from '@ngrx/store';
import {
  obtenerProfesoresExitoso,
  nuevoProfesor,
  obtenerMateriasExitoso,
  cancelarFormularios,
  modificarNombre,
  registrarNuevaMateria
} from '../actions/gestion-profesores.actions';
import { Profesores, Profesor } from '../../gestion-profesores.models';
import { Materias } from 'src/app/shared/shared.models';

export interface GestionProfesoresState {
  profesores: Profesores;
  nuevoOEditando: boolean;
  editandoMaterias: boolean;
  materias: Materias;
  profesorAModificar: Profesor;
  profesorAAGregarMateria: Profesor;
}

export interface State {
  gestionProfesores: GestionProfesoresState;
}

export const initialState: GestionProfesoresState = {
  profesores: [],
  nuevoOEditando: false,
  editandoMaterias: false,
  materias: [],
  profesorAModificar: null,
  profesorAAGregarMateria: null
};

const gestionProfesoresReducer = createReducer(
  initialState,
  on(obtenerProfesoresExitoso, (state, accion) => ({ ...state, profesores: [...accion.profesores] })),
  on(nuevoProfesor, (state) => ({ ...state, nuevoOEditando: true })),
  on(obtenerMateriasExitoso, (state, accion) => ({ ...state, materias: [...accion.materias] })),
  on(cancelarFormularios, (state) => ({
    ...state,
    nuevoOEditando: false,
    editandoMaterias: false,
    profesorAModificar: null,
    profesorAAGregarMateria: null
  })),
  on(modificarNombre, (state, accion) => ({ ...state, nuevoOEditando: true, profesorAModificar: accion.profesor })),
  on(registrarNuevaMateria, (state, accion) => ({ ...state, editandoMaterias: true, profesorAAGregarMateria: { ...accion.profesor } }))
);

export function reducer(state: GestionProfesoresState | undefined, accion: Action) {
  return gestionProfesoresReducer(state, accion);
}
