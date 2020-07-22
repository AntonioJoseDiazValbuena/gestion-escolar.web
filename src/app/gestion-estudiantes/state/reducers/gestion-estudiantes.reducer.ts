import { createReducer, Action, on } from '@ngrx/store';
import {
  obtenerEstudiantesExitoso,
  modificarNotas,
  cancelarFormularios,
  ingresarAMateria,
  obtenerMateriasExitoso,
  nuevoEstudiante,
  modificarNombre
} from '../actions/gestion-estudiantes.actions';
import { Estudiantes, Estudiante, MateriaEstudiante } from '../../gestion-estudiantes.models';
import { Grupos } from 'src/app/shared/shared.models';

export interface GestionEstudiantesState {
  estudiantes: Estudiantes;
  nuevoOEditando: boolean;
  editandoNotas: boolean;
  editandoMaterias: boolean;
  notasACambiar: MateriaEstudiante;
  estudianteAModificar: Estudiante;
  estudianteAAgregarMateria: Estudiante;
  estudianteAModificarNotas: Estudiante;
  materias: Grupos;
}

export interface State {
  gestionEstudiantes: GestionEstudiantesState;
}

export const initialState: GestionEstudiantesState = {
  estudiantes: [],
  nuevoOEditando: false,
  editandoNotas: false,
  editandoMaterias: false,
  notasACambiar: null,
  estudianteAModificar: null,
  estudianteAAgregarMateria: null,
  materias: [],
  estudianteAModificarNotas: null
};

const gestionEstudiantesReducer = createReducer(
  initialState,
  on(obtenerEstudiantesExitoso, (state, accion) => ({ ...state, estudiantes: [...accion.estudiantes] })),
  on(modificarNotas, (state, accion) =>
    ({ ...state, notasACambiar: { ...accion.materia }, estudianteAModificarNotas: { ...accion.estudiante }, editandoNotas: true })),
  on(cancelarFormularios, (state) => ({
    ...state,
    nuevoOEditando: false,
    editandoMaterias: false,
    editandoNotas: false,
    estudianteAAgregarMateria: null,
    estudianteAModificar: null,
    notasACambiar: null,
    estudianteAModificarNotas: null
  })),
  on(ingresarAMateria, (state, accion) => ({ ...state, estudianteAAgregarMateria: { ...accion.estudiante }, editandoMaterias: true })),
  on(obtenerMateriasExitoso, (state, accion) => ({ ...state, materias: [...accion.materias] })),
  on(nuevoEstudiante, (state) => ({ ...state, nuevoOEditando: true, estudianteAModificar: null })),
  on(modificarNombre, (state, accion) => ({ ...state, nuevoOEditando: true, estudianteAModificar: accion.estudiante }))
);

export function reducer(state: GestionEstudiantesState | undefined, accion: Action) {
  return gestionEstudiantesReducer(state, accion);
}
