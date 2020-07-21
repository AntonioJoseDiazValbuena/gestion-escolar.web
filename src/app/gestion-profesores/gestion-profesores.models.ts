import { Grupos } from '../shared/shared.models';

export interface Profesor {
  id: number;
  cedula: string;
  nombre: string;
  grupos: Grupos;
}

export type Profesores = Profesor[];
