import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEstudiantesNotasComponent } from './gestion-estudiantes-notas.component';
import { NO_ERRORS_SCHEMA, SimpleChange, SimpleChanges } from '@angular/core';
import { MateriaEstudiante, Estudiante } from '../../gestion-estudiantes.models';
import { FormBuilder } from '@angular/forms';
import { Grupo, Materia } from 'src/app/shared/shared.models';
import { Profesor } from 'src/app/gestion-profesores/gestion-profesores.models';

describe('GestionEstudiantesNotasComponent', () => {
  let component: GestionEstudiantesNotasComponent;
  let fixture: ComponentFixture<GestionEstudiantesNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GestionEstudiantesNotasComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEstudiantesNotasComponent);
    component = fixture.componentInstance;
    component.notasRecibidas = { grupo: { materia: {}, profesor: {} } } as MateriaEstudiante;
    component.estudianteRecibido = {} as Estudiante;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe "ngOnInit" inicializar el formulario con los valores por defecto', () => {
    component.ngOnInit();
    fixture.detectChanges();

    const registroEsperado = {
      idGrupo: '' as any,
      tarjetaIdentidadEstudiante: '' as any,
      calificacionPrimerPeriodo: '' as any,
      calificacionSegundoPeriodo: '' as any,
      calificacionTercerPeriodo: '' as any
    } as MateriaEstudiante;

    expect(component.notas.value as MateriaEstudiante).toEqual(registroEsperado);
  });

  it('debe "ngOnChanges", cuando detecta un cambio de la materia, hacer reset en el formulario', () => {
    spyOn(component.notas, 'reset');
    const cambios = {
      notasRecibidas: new SimpleChange(null, {
        calificacionPrimerPeriodo: 1
      }, false)
    } as SimpleChanges;

    component.ngOnChanges(cambios);
    expect(component.notas.reset).toHaveBeenCalled();
  });

  it('debe "ngOnChanges", asignar los valores al formulario', () => {
    const formularioEsperado = {
      calificacionPrimerPeriodo: 1,
      calificacionSegundoPeriodo: 1,
      calificacionTercerPeriodo: 1,
      idGrupo: 1,
      tarjetaIdentidadEstudiante: '1007465364',
      grupo: { materia: {} as Materia, profesor: {} as Profesor } as Grupo
    } as MateriaEstudiante;

    component.notasRecibidas = formularioEsperado;

    const cambios = {
      notasRecibidas: new SimpleChange(null, {
        calificacionPrimerPeriodo: 1,
        calificacionSegundoPeriodo: 1,
        calificacionTercerPeriodo: 1,
        idGrupo: 1,
        tarjetaIdentidadEstudiante: '1007465364',
        grupo: { materia: {} as Materia, profesor: {} as Profesor } as Grupo
      }, false)
    } as SimpleChanges;

    component.ngOnChanges(cambios);
    fixture.detectChanges();

    expect(component.notas.value as MateriaEstudiante).toEqual({
      calificacionPrimerPeriodo: 1,
      calificacionSegundoPeriodo: 1,
      calificacionTercerPeriodo: 1,
      idGrupo: 1,
      tarjetaIdentidadEstudiante: '1007465364'
    } as MateriaEstudiante);
  });

  it('debe "guardar" emitir el evento "guardarNotas"', () => {
    let llamado = false;

    component.guardarNotas.subscribe(llamado = true);

    component.guardar();

    expect(llamado).toBeTruthy();
  });

  it('debe "cancelar" emitir el evento "cancelarEdicionDeNotas"', () => {
    let llamado = false;

    component.cancelarEdicionDeNotas.subscribe(llamado = true);

    component.cancelar();

    expect(llamado).toBeTruthy();
  });
});
