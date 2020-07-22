import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMateriasListadoComponent } from './gestion-materias-listado.component';
import { Materia } from 'src/app/shared/shared.models';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GestionMateriasListadoComponent', () => {
  let component: GestionMateriasListadoComponent;
  let fixture: ComponentFixture<GestionMateriasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GestionMateriasListadoComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMateriasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe "registrarMateria" emitir el evento "nuevaMateria"', () => {
    let llamado = false;

    component.nuevaMateria.subscribe(llamado = true);

    component.registrarMateria();

    expect(llamado).toBeTruthy();
  });

  it('debe "cambiarNotas" emitir el evento "eliminarMateria"', () => {
    const materia = {} as Materia;

    let llamado = false;

    component.eliminarMateria.subscribe(llamado = true);

    component.eliminar(materia);

    expect(llamado).toBeTruthy();
  });
});
