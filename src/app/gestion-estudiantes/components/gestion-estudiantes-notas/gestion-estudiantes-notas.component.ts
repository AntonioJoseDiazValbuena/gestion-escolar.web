import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Estudiante, MateriaEstudiante } from '../../gestion-estudiantes.models';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gestion-estudiantes-notas',
  templateUrl: './gestion-estudiantes-notas.component.html',
  styleUrls: ['./gestion-estudiantes-notas.component.scss']
})
export class GestionEstudiantesNotasComponent implements OnInit, OnChanges {
  @Input() notasRecibidas: MateriaEstudiante;
  @Input() estudianteRecibido: Estudiante;
  @Output() guardarNotas = new EventEmitter<MateriaEstudiante>();
  @Output() cancelarEdicionDeNotas = new EventEmitter<void>()

  notas: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.inicializarFormulario();
  }

  ngOnChanges(cambios: SimpleChanges) {
    this.inicializarFormulario();
    this.asignarValores(cambios);
  }

  asignarValores(cambios: SimpleChanges) {
    if (!!cambios.notasRecibidas.currentValue) {
      this.notas.reset({
        idGrupo: this.notasRecibidas.idGrupo,
        tarjetaIdentidadEstudiante: this.notasRecibidas.tarjetaIdentidadEstudiante,
        calificacionPrimerPeriodo: this.notasRecibidas.calificacionPrimerPeriodo,
        calificacionSegundoPeriodo: this.notasRecibidas.calificacionSegundoPeriodo,
        calificacionTercerPeriodo: this.notasRecibidas.calificacionTercerPeriodo
      })
    }
  }

  inicializarFormulario() {
    this.notas = this.notas || this.fb.group({
      idGrupo: [''],
      tarjetaIdentidadEstudiante: [''],
      calificacionPrimerPeriodo: [''],
      calificacionSegundoPeriodo: [''],
      calificacionTercerPeriodo: ['']
    })
  }

  guardar() {
    this.guardarNotas.emit({ ...this.notas.value });
  }

  cancelar() {
    this.cancelarEdicionDeNotas.emit();
  }
}
