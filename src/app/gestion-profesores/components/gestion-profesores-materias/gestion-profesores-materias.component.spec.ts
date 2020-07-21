import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfesoresMateriasComponent } from './gestion-profesores-materias.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Grupo } from 'src/app/shared/shared.models';

describe('GestionProfesoresMateriasComponent', () => {
  let component: GestionProfesoresMateriasComponent;
  let fixture: ComponentFixture<GestionProfesoresMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProfesoresMateriasComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProfesoresMateriasComponent);
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
      idMateria: '' as any
    } as Grupo;

    expect(component.formulario.value as Grupo).toEqual(registroEsperado);
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
