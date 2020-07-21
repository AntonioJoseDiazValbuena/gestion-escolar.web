import { MateriasEstudiantes } from '../gestion-estudiantes/gestion-estudiantes.models';
import { Profesor } from '../gestion-profesores/gestion-profesores.models';

export interface Grupo {
  id: number;
  cedulaProfesor: string;
  idMateria: number;
  materiasEstudiante: MateriasEstudiantes;
  materia: Materia;
  profesor: Profesor
}

export interface Materia {
  id: number;
  nombre: string;
  grupos: Grupos;
}

export type Grupos = Grupo[];

export type Materias = Materia[];
