import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMateriasFormularioComponent } from './gestion-materias-formulario.component';
import { NO_ERRORS_SCHEMA, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Materia } from 'src/app/shared/shared.models';

describe('GestionMateriasFormularioComponent', () => {
  let component: GestionMateriasFormularioComponent;
  let fixture: ComponentFixture<GestionMateriasFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GestionMateriasFormularioComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMateriasFormularioComponent);
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
      nombre: ''
    } as Materia;

    expect(component.materia.value as Materia).toEqual(registroEsperado);
  });

  it('debe "guardar" emitir el evento "guardarMateria"', () => {
    let llamado = false;

    component.guardarMateria.subscribe(llamado = true);

    component.guardar();

    expect(llamado).toBeTruthy();
  });

  it('debe "cancelar" emitir el evento "cancelarRegistro"', () => {
    let llamado = false;

    component.cancelarRegistro.subscribe(llamado = true);

    component.cancelar();

    expect(llamado).toBeTruthy();
  });
});
