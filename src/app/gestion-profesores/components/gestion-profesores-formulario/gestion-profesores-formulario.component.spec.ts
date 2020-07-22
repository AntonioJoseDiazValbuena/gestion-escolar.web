import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfesoresFormularioComponent } from './gestion-profesores-formulario.component';
import { NO_ERRORS_SCHEMA, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Profesor } from '../../gestion-profesores.models';
import { By } from '@angular/platform-browser';

describe('GestionProfesoresFormularioComponent', () => {
  let component: GestionProfesoresFormularioComponent;
  let fixture: ComponentFixture<GestionProfesoresFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProfesoresFormularioComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProfesoresFormularioComponent);
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
      cedula: '',
      nombre: ''
    } as Profesor;

    expect(component.profesor.value as Profesor).toEqual(registroEsperado);
  });

  it('debe "ngOnChanges", cuando detecta un cambio de la cedula, hacer reset en el formulario', () => {
    spyOn(component.profesor, 'reset');

    const formularioEsperado = {
      cedula: '1007465364',
      nombre: 'Antonio'
    } as Profesor;

    component.profesorRecibido = formularioEsperado;

    const cambios = {
      profesorRecibido: new SimpleChange(null, {
        cedula: '1007465364'
      }, false)
    } as SimpleChanges;

    component.ngOnChanges(cambios);
    expect(component.profesor.reset).toHaveBeenCalled();
  });

  it('debe "ngOnChanges", asignar los valores al formulario', () => {
    const formularioEsperado = {
      cedula: '1007465364',
      nombre: 'Antonio'
    } as Profesor;

    component.profesorRecibido = formularioEsperado;

    const cambios = {
      profesorRecibido: new SimpleChange(null, {
        cedula: '1007465364',
        nombre: 'Antonio'
      }, false)
    } as SimpleChanges;

    component.ngOnChanges(cambios);
    fixture.detectChanges();

    expect(component.profesor.value as Profesor).toEqual(formularioEsperado);
  });

  it('debe "guardar" emitir el evento "guardarProfesor"', () => {
    let llamado = false;

    component.guardarProfesor.subscribe(llamado = true);

    component.guardar();

    expect(llamado).toBeTruthy();
  });

  it('debe "actualizar" emitir el evento "actualizarProfesor"', () => {
    let llamado = false;

    component.actualizarProfesor.subscribe(llamado = true);

    component.actualizar();

    expect(llamado).toBeTruthy();
  });

  it('debe "cancelar" emitir el evento "cancelarRegistro"', () => {
    let llamado = false;

    component.cancelarRegistro.subscribe(llamado = true);

    component.cancelar();

    expect(llamado).toBeTruthy();
  });

  it('debe mostrarse el formulario de creacion cuando no reciba objeto a modificar', () => {
    component.profesorRecibido = null;

    fixture.detectChanges();

    const tituloRegistro = fixture.debugElement.query(By.css('h1[name="tituloRegistro"]'));
    const botonGuardar = fixture.debugElement.query(By.css('button[name="botonGuardar"]'));
    const divInputCedula = fixture.debugElement.query(By.css('div[name="inputCedula"]'));

    expect(tituloRegistro).toBeTruthy();
    expect(botonGuardar).toBeTruthy();
    expect(divInputCedula).toBeTruthy();
  });

  it('debe mostrarse el formulario de edicion cuando reciba el objeto a modificar', () => {
    const profesor = {
      cedula: '1007465364'
    } as Profesor;

    component.profesorRecibido = profesor;

    fixture.detectChanges();

    const tituloEdicion = fixture.debugElement.query(By.css('h1[name="tituloEdicion"]'));
    const botonActualizar = fixture.debugElement.query(By.css('button[name="botonActualizar"]'));
    const divTituloCedula = fixture.debugElement.query(By.css('div[name="tituloCedula"]'));

    expect(tituloEdicion).toBeTruthy();
    expect(botonActualizar).toBeTruthy();
    expect(divTituloCedula).toBeTruthy();
  });
});
