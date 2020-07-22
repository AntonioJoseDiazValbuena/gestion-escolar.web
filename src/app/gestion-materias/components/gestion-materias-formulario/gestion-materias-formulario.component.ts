import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Materia } from 'src/app/shared/shared.models';

@Component({
  selector: 'app-gestion-materias-formulario',
  templateUrl: './gestion-materias-formulario.component.html',
  styleUrls: ['./gestion-materias-formulario.component.scss']
})
export class GestionMateriasFormularioComponent implements OnInit {
  @Output() guardarMateria = new EventEmitter<Materia>();
  @Output() cancelarRegistro = new EventEmitter<void>();

  constructor(private fb: FormBuilder) { }

  materia: FormGroup;

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.materia = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  guardar() {
    this.guardarMateria.emit({ ...this.materia.value } as Materia)
  }

  cancelar() {
    this.cancelarRegistro.emit();
  }
}
