import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfesoresListadoComponent } from './gestion-profesores-listado.component';

describe('GestionProfesoresListadoComponent', () => {
  let component: GestionProfesoresListadoComponent;
  let fixture: ComponentFixture<GestionProfesoresListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionProfesoresListadoComponent ]
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
});
