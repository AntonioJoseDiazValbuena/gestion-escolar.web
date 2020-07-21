import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEstudiantesShellComponent } from './gestion-estudiantes-shell.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GestionEstudiantesService } from '../../gestion-estudiantes.service';
import { Estudiantes, MateriaEstudiante } from '../../gestion-estudiantes.models';
import { of } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import * as fromGestionEstudiantes from '../../state';
import { EffectsModule } from '@ngrx/effects';

describe('GestionEstudiantesShellComponent', () => {
  let component: GestionEstudiantesShellComponent;
  let fixture: ComponentFixture<GestionEstudiantesShellComponent>;
  let gestionEstudiantesService: jasmine.SpyObj<GestionEstudiantesService>;
  let estudiantesEsperados = [] as Estudiantes;

  beforeEach(async(() => {
    estudiantesEsperados = [
      {
        materias: [{} as MateriaEstudiante],
        nombre: 'Juanito',
        tarjetaIdentidad: '10073774'
      }
    ]

    gestionEstudiantesService = jasmine.createSpyObj<GestionEstudiantesService>('GestionEstudiantesService', {
      obtenerEstudiantes: of(estudiantesEsperados)
    })

    TestBed.configureTestingModule({
      declarations: [GestionEstudiantesShellComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('gestionEstudiantes', fromGestionEstudiantes.reducer),
        EffectsModule.forRoot([fromGestionEstudiantes.GestionEstudiantesEffects])
      ],
      providers: [{
        provide: GestionEstudiantesService,
        useValue: gestionEstudiantesService
      }]
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
