import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Estudiante, MateriaEstudiante } from '../../gestion-estudiantes.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Grupos, Grupo } from 'src/app/shared/shared.models';

@Component({
  selector: 'app-gestion-estudiantes-formulario',
  templateUrl: './gestion-estudiantes-formulario.component.html',
  styleUrls: ['./gestion-estudiantes-formulario.component.scss']
})
export class GestionEstudiantesFormularioComponent implements OnInit, OnChanges {
  @Input() estudianteRecibido = {} as Estudiante;
  @Output() guardarEstudiante = new EventEmitter<Estudiante>();
  @Output() actualizarEstudiante = new EventEmitter<Estudiante>();
  @Output() cancelarRegistro = new EventEmitter<void>();

  constructor(private fb: FormBuilder) { }

  estudiante: FormGroup;

  ngOnInit() {
    this.inicializarFormulario();
  }

  ngOnChanges(cambios: SimpleChanges) {
    this.inicializarFormulario();
    this.asignarValores(cambios);
  }

  inicializarFormulario() {
    this.estudiante = this.estudiante || this.fb.group({
      tarjetaIdentidad: ['', Validators.required],
      nombre: ['', Validators.required]
    });
  }

  asignarValores(cambios: SimpleChanges) {
    if (!!cambios.estudianteRecibido.currentValue) {
      this.estudiante.reset({
        tarjetaIdentidad: this.estudianteRecibido.tarjetaIdentidad,
        nombre: this.estudianteRecibido.nombre
      });
    }
  }

  guardar() {
    this.guardarEstudiante.emit({
      ...this.estudiante.value
    });
  }

  actualizar() {
    this.actualizarEstudiante.emit({
      ...this.estudiante.value
    });
  }

  cancelar() {
    this.cancelarRegistro.emit();
  }
}
