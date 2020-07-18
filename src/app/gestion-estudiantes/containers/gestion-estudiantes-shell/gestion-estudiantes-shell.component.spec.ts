import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEstudiantesShellComponent } from './gestion-estudiantes-shell.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GestionEstudiantesShellComponent', () => {
  let component: GestionEstudiantesShellComponent;
  let fixture: ComponentFixture<GestionEstudiantesShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GestionEstudiantesShellComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEstudiantesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
