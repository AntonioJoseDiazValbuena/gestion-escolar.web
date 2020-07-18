import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfesoresShellComponent } from './gestion-profesores-shell.component';

describe('GestionProfesoresShellComponent', () => {
  let component: GestionProfesoresShellComponent;
  let fixture: ComponentFixture<GestionProfesoresShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionProfesoresShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProfesoresShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
