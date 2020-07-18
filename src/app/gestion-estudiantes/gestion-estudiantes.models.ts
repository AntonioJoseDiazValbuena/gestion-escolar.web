import { Profesores } from '../gestion-profesores/gestion-profesores.models';

export interface Estudiante {
  tarjetaIdentidad: number;
  nombre: string;
  materias: MateriasYCalificaciones;
}

export interface MateriaYCalificacion {
  id: string;
  nombre: string;
  calificacionPrimerPeriodo: number;
  calificacionSegundoPeriodo: number;
  calificacionTercerPeriodo: number;
  profesores: Profesores;
}

export type Estudiantes = Estudiante[];

export type MateriasYCalificaciones = MateriaYCalificacion[];
