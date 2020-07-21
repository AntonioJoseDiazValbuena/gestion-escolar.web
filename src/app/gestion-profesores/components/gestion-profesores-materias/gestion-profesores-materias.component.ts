import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Materia, Materias, Grupo } from 'src/app/shared/shared.models';
import { Profesor } from '../../gestion-profesores.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-profesores-materias',
  templateUrl: './gestion-profesores-materias.component.html',
  styleUrls: ['./gestion-profesores-materias.component.scss']
})
export class GestionProfesoresMateriasComponent implements OnInit {
  @Input() materias = [{} as Materia] as Materias;
  @Input() profesorRecibido = {} as Profesor;
  @Output() agregarMateria = new EventEmitter<Grupo>();
  @Output() cancelarRegistroMateria = new EventEmitter<void>();

  formulario: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      idMateria: ['', Validators.required]
    })
  }

  agregar() {
    this.agregarMateria.emit({
      idMateria: this.formulario.value.idMateria,
      cedulaProfesor: this.profesorRecibido.cedula
    } as Grupo);
  }

  cancelar() {
    this.cancelarRegistroMateria.emit();
  }
}
