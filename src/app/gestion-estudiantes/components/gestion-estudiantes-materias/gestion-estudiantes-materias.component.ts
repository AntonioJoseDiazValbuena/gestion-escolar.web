import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Grupos, Materia, Grupo } from 'src/app/shared/shared.models';
import { Estudiante, MateriaEstudiante, MateriasEstudiantes } from '../../gestion-estudiantes.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-estudiantes-materias',
  templateUrl: './gestion-estudiantes-materias.component.html',
  styleUrls: ['./gestion-estudiantes-materias.component.scss']
})
export class GestionEstudiantesMateriasComponent implements OnInit {
  @Input() materias: Grupos = [];
  @Input() estudianteRecibido = {
    materias: [
      { grupo: { materia: {} as Materia, profesor: {} } as Grupo } as MateriaEstudiante
    ] as MateriasEstudiantes
  } as Estudiante;
  @Output() agregarMateria = new EventEmitter<MateriaEstudiante>();
  @Output() cancelarRegistroMateria = new EventEmitter<void>();

  formulario: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      idGrupo: ['', Validators.required]
    })
  }

  agregar() {
    this.agregarMateria.emit({
      idGrupo: this.formulario.value.idGrupo,
      tarjetaIdentidadEstudiante: this.estudianteRecibido.tarjetaIdentidad
    } as MateriaEstudiante);
  }

  cancelar() {
    this.cancelarRegistroMateria.emit();
  }
}
