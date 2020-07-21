import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Estudiante, MateriaEstudiante } from '../../gestion-estudiantes.models';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Grupo, Materia } from 'src/app/shared/shared.models';

@Component({
  selector: 'app-gestion-estudiantes-notas',
  templateUrl: './gestion-estudiantes-notas.component.html',
  styleUrls: ['./gestion-estudiantes-notas.component.scss']
})
export class GestionEstudiantesNotasComponent implements OnInit, OnChanges {
  @Input() notasRecibidas = { estudiante: {} as Estudiante, grupo: { materia: {} as Materia } as Grupo } as MateriaEstudiante;
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
