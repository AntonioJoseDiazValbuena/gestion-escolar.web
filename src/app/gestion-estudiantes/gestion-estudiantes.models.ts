export interface Estudiante {
  numeroIdentificacion: number;
  nombre: string;
  materias: MateriasYCalificaciones;
}

export interface MateriaYCalificacion {
  id: string;
  nombre: string;
  calificacion: number;
  // profesor: Profesor;
}

export type Estudiantes = Estudiante[];

export type MateriasYCalificaciones = MateriaYCalificacion[];
