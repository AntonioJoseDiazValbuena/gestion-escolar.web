import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEstudiantesListadoComponent } from './gestion-estudiantes-listado.component';

describe('GestionEstudiantesListadoComponent', () => {
  let component: GestionEstudiantesListadoComponent;
  let fixture: ComponentFixture<GestionEstudiantesListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEstudiantesListadoComponent ]
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
});
