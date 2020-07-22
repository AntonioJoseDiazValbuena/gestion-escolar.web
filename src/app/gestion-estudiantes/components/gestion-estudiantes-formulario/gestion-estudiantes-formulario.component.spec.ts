import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEstudiantesFormularioComponent } from './gestion-estudiantes-formulario.component';
import { NO_ERRORS_SCHEMA, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Estudiante } from '../../gestion-estudiantes.models';
import { By } from '@angular/platform-browser';

describe('GestionEstudiantesFormularioComponent', () => {
  let component: GestionEstudiantesFormularioComponent;
  let fixture: ComponentFixture<GestionEstudiantesFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GestionEstudiantesFormularioComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEstudiantesFormularioComponent);
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
      tarjetaIdentidad: '',
      nombre: ''
    } as Estudiante;

    expect(component.estudiante.value as Estudiante).toEqual(registroEsperado);
  });

  it('debe "ngOnChanges", cuando detecta un cambio de la tarjeta de identidad, hacer reset en el formulario', () => {
    spyOn(component.estudiante, 'reset');

    const formularioEsperado = {
      tarjetaIdentidad: '1007465364',
      nombre: 'Antonio'
    } as Estudiante;

    component.estudianteRecibido = formularioEsperado;

    const cambios = {
      estudianteRecibido: new SimpleChange(null, {
        tarjetaIdentidad: '1007465364'
      }, false)
    } as SimpleChanges;

    component.ngOnChanges(cambios);
    expect(component.estudiante.reset).toHaveBeenCalled();
  });

  it('debe "ngOnChanges", asignar los valores al formulario', () => {
    const formularioEsperado = {
      tarjetaIdentidad: '1007465364',
      nombre: 'Antonio'
    } as Estudiante;

    component.estudianteRecibido = formularioEsperado;

    const cambios = {
      estudianteRecibido: new SimpleChange(null, {
        tarjetaIdentidad: '1007465364',
        nombre: 'Antonio'
      }, false)
    } as SimpleChanges;

    component.ngOnChanges(cambios);
    fixture.detectChanges();

    expect(component.estudiante.value as Estudiante).toEqual(formularioEsperado);
  });

  it('debe "guardar" emitir el evento "guardarEstudiante"', () => {
    let llamado = false;

    component.guardarEstudiante.subscribe(llamado = true);

    component.guardar();

    expect(llamado).toBeTruthy();
  });

  it('debe "actualizar" emitir el evento "actualizarEstudiante"', () => {
    let llamado = false;

    component.actualizarEstudiante.subscribe(llamado = true);

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
    component.estudianteRecibido = null;

    fixture.detectChanges();

    const tituloRegistro = fixture.debugElement.query(By.css('h1[name="tituloRegistro"]'));
    const botonGuardar = fixture.debugElement.query(By.css('button[name="botonGuardar"]'));
    const divInputTarjetaIdentidad = fixture.debugElement.query(By.css('div[name="inputTarjetaIdentidad"]'));

    expect(tituloRegistro).toBeTruthy();
    expect(botonGuardar).toBeTruthy();
    expect(divInputTarjetaIdentidad).toBeTruthy();
  });

  it('debe mostrarse el formulario de edicion cuando reciba el objeto a modificar', () => {
    const estudiante = {
      tarjetaIdentidad: '1007465364'
    } as Estudiante;

    component.estudianteRecibido = estudiante;

    fixture.detectChanges();

    const tituloEdicion = fixture.debugElement.query(By.css('h1[name="tituloEdicion"]'));
    const botonActualizar = fixture.debugElement.query(By.css('button[name="botonActualizar"]'));
    const divTituloTarjetaIdentidad = fixture.debugElement.query(By.css('div[name="tituloTarjetaIdentidad"]'));

    expect(tituloEdicion).toBeTruthy();
    expect(botonActualizar).toBeTruthy();
    expect(divTituloTarjetaIdentidad).toBeTruthy();
  });
});
