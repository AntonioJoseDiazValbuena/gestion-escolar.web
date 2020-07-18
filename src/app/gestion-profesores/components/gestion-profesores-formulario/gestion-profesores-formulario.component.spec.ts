import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfesoresFormularioComponent } from './gestion-profesores-formulario.component';

describe('GestionProfesoresFormularioComponent', () => {
  let component: GestionProfesoresFormularioComponent;
  let fixture: ComponentFixture<GestionProfesoresFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionProfesoresFormularioComponent ]
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
});
