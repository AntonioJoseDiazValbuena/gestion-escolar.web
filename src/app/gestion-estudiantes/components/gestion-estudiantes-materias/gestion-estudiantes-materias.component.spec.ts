import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEstudiantesMateriasComponent } from './gestion-estudiantes-materias.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MateriaEstudiante } from '../../gestion-estudiantes.models';
import { Grupo, Materia } from 'src/app/shared/shared.models';

describe('GestionEstudiantesMateriasComponent', () => {
  let component: GestionEstudiantesMateriasComponent;
  let fixture: ComponentFixture<GestionEstudiantesMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GestionEstudiantesMateriasComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEstudiantesMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe "ngOnInit" inicializar el formulario con los valores por defecto', () => {
    component.ngOnInit();
    fixture.detectChanges();

    const registroEsperado = {
      idGrupo: '' as any
    } as MateriaEstudiante;

    expect(component.formulario.value as MateriaEstudiante).toEqual(registroEsperado);
  });

  it('debe "agregar" emitir el evento "agregarMateria"', () => {
    let llamado = false;

    component.agregarMateria.subscribe(llamado = true);

    component.agregar();

    expect(llamado).toBeTruthy();
  });

  it('debe "cancelar" emitir el evento "cancelarRegistroMateria"', () => {
    let llamado = false;

    component.cancelarRegistroMateria.subscribe(llamado = true);

    component.cancelar();

    expect(llamado).toBeTruthy();
  });
});
