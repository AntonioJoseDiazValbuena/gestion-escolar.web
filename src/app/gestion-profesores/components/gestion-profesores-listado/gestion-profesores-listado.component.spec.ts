import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfesoresListadoComponent } from './gestion-profesores-listado.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Profesor } from '../../gestion-profesores.models';
import { Grupo } from 'src/app/shared/shared.models';

describe('GestionProfesoresListadoComponent', () => {
  let component: GestionProfesoresListadoComponent;
  let fixture: ComponentFixture<GestionProfesoresListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProfesoresListadoComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProfesoresListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe "registrarProfesor" emitir el evento "nuevoProfesor"', () => {
    let llamado = false;

    component.nuevoProfesor.subscribe(llamado = true);

    component.registrarProfesor();

    expect(llamado).toBeTruthy();
  });

  it('debe "eliminar" emitir el evento "eliminarGrupo"', () => {
    const grupo = {} as Grupo;

    let llamado = false;

    component.eliminarGrupo.subscribe(llamado = true);

    component.eliminar(grupo);

    expect(llamado).toBeTruthy();
  });

  it('debe "eliminarProfesor" emitir el evento "removerProfesor"', () => {
    const profesor = {} as Profesor;

    let llamado = false;

    component.removerProfesor.subscribe(llamado = true);

    component.eliminarProfesor(profesor);

    expect(llamado).toBeTruthy();
  });

  it('debe "cambiarNombre" emitir el evento "modificarNombre"', () => {
    const profesor = {} as Profesor;

    let llamado = false;

    component.modificarNombre.subscribe(llamado = true);

    component.cambiarNombre(profesor);

    expect(llamado).toBeTruthy();
  });

  it('debe "registrarMateria" emitir el evento "registrarNuevaMateria"', () => {
    const profesor = {} as Profesor;

    let llamado = false;

    component.registrarNuevaMateria.subscribe(llamado = true);

    component.registrarMateria(profesor);

    expect(llamado).toBeTruthy();
  });
});
