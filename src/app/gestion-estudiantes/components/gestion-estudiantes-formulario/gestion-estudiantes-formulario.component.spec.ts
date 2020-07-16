import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEstudiantesFormularioComponent } from './gestion-estudiantes-formulario.component';

describe('GestionEstudiantesFormularioComponent', () => {
  let component: GestionEstudiantesFormularioComponent;
  let fixture: ComponentFixture<GestionEstudiantesFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEstudiantesFormularioComponent ]
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
});
