import { Grupo } from '../shared/shared.models';

export interface Estudiante {
  tarjetaIdentidad: string;
  nombre: string;
  materias: MateriasEstudiantes;
}

export interface MateriaEstudiante {
  id: string;
  idGrupo: number;
  tarjetaIdentidadEstudiante: string;
  calificacionPrimerPeriodo: number;
  calificacionSegundoPeriodo: number;
  calificacionTercerPeriodo: number;
  estudiante: Estudiante;
  grupo: Grupo;
}

export type Estudiantes = Estudiante[];

export type MateriasEstudiantes = MateriaEstudiante[];
