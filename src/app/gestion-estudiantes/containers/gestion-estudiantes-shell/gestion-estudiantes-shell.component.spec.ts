import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEstudiantesShellComponent } from './gestion-estudiantes-shell.component';

describe('GestionEstudiantesShellComponent', () => {
  let component: GestionEstudiantesShellComponent;
  let fixture: ComponentFixture<GestionEstudiantesShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEstudiantesShellComponent ]
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
