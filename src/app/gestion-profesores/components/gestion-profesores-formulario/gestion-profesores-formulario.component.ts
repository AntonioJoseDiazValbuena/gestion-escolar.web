import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Profesor } from '../../gestion-profesores.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-profesores-formulario',
  templateUrl: './gestion-profesores-formulario.component.html',
  styleUrls: ['./gestion-profesores-formulario.component.scss']
})
export class GestionProfesoresFormularioComponent implements OnInit, OnChanges {
  @Input() profesorRecibido = {} as Profesor;
  @Output() guardarProfesor = new EventEmitter<Profesor>();
  @Output() actualizarProfesor = new EventEmitter<Profesor>();
  @Output() cancelarRegistro = new EventEmitter<void>();

  constructor(private fb: FormBuilder) { }

  profesor: FormGroup;

  ngOnInit() {
    this.inicializarFormulario();
  }

  ngOnChanges(cambios: SimpleChanges) {
    this.inicializarFormulario();
    this.asignarValores(cambios);
  }

  inicializarFormulario() {
    this.profesor = this.profesor || this.fb.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required]
    });
  }

  asignarValores(cambios: SimpleChanges) {
    if (!!cambios.profesorRecibido.currentValue) {
      this.profesor.reset({
        cedula: this.profesorRecibido.cedula,
        nombre: this.profesorRecibido.nombre
      });
    }
  }

  guardar() {
    this.guardarProfesor.emit({
      ...this.profesor.value
    });
  }

  actualizar() {
    this.actualizarProfesor.emit({
      ...this.profesor.value
    });
  }

  cancelar() {
    this.cancelarRegistro.emit();
  }
}
