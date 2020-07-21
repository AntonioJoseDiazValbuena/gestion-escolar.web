import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEstudiantesListadoComponent } from './gestion-estudiantes-listado.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MateriaEstudiante, Estudiante } from '../../gestion-estudiantes.models';

describe('GestionEstudiantesListadoComponent', () => {
  let component: GestionEstudiantesListadoComponent;
  let fixture: ComponentFixture<GestionEstudiantesListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GestionEstudiantesListadoComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEstudiantesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe "cambiarNotas" emitir el evento "modificarNotas"', () => {
    const materia = {} as MateriaEstudiante;

    let llamado = false;

    component.modificarNotas.subscribe(llamado = true);

    component.cambiarNotas(materia);

    expect(llamado).toBeTruthy();
  });

  it('debe "ingresarAMateria" emitir el evento "registrarNuevaMateria"', () => {
    const estudiante = {} as Estudiante;

    let llamado = false;

    component.registrarNuevaMateria.subscribe(llamado = true);

    component.ingresarAMateria(estudiante);

    expect(llamado).toBeTruthy();
  });

  it('debe "nuevo" emitir el evento "nuevoEstudiante"', () => {
    let llamado = false;

    component.nuevoEstudiante.subscribe(llamado = true);

    component.nuevo();

    expect(llamado).toBeTruthy();
  });

  it('debe "cambiarNombre" emitir el evento "modificarNombre"', () => {
    const estudiante = {} as Estudiante;

    let llamado = false;

    component.modificarNombre.subscribe(llamado = true);

    component.cambiarNombre(estudiante);

    expect(llamado).toBeTruthy();
  });

  it('debe "removerMateria" emitir el evento "eliminarMateria"', () => {
    const materia = {} as MateriaEstudiante;

    let llamado = false;

    component.eliminarMateria.subscribe(llamado = true);

    component.removerMateria(materia);

    expect(llamado).toBeTruthy();
  });

  it('debe "eliminar" emitir el evento "eliminarEstudiante"', () => {
    const estudiante = {} as Estudiante;

    let llamado = false;

    component.eliminarEstudiante.subscribe(llamado = true);

    component.eliminar(estudiante);

    expect(llamado).toBeTruthy();
  });
});
