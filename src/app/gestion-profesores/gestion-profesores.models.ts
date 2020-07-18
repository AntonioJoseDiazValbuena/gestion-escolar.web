export interface Profesor {
  cedula: string;
  nombre: string;
  materias: Materias;
}

export interface Materia {
  id: number;
  nombre: string;
}

export type Materias = Materia[];

export type Profesores = Profesor[];
