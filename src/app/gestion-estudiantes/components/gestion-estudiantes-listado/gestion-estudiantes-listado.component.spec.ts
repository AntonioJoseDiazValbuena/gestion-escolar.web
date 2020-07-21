import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEstudiantesListadoComponent } from './gestion-estudiantes-listado.component';
import { GestionEstudiantesService } from '../../gestion-estudiantes.service';
import { Estudiantes } from '../../gestion-estudiantes.models';
import { Grupos } from 'src/app/shared/shared.models';
import { EMPTY, of } from 'rxjs';
import { StoreModule, Store } from '@ngrx/store';
import * as fromGestionEstudiantes from '../../state';
import { EffectsModule } from '@ngrx/effects';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GestionEstudiantesListadoComponent', () => {
  let component: GestionEstudiantesListadoComponent;
  let fixture: ComponentFixture<GestionEstudiantesListadoComponent>;
  let gestionEstudianteServicio: jasmine.SpyObj<GestionEstudiantesService>;
  let estudiantesEsperados = [] as Estudiantes;
  let materiasEsperadas = [] as Grupos;
  let store: Store<fromGestionEstudiantes.State>;

  beforeEach(async(() => {
    estudiantesEsperados = [{
      materias: [],
      nombre: 'Antonio',
      tarjetaIdentidad: '1007465364'
    }]

    materiasEsperadas = [{
      cedulaProfesor: '1076622840',
      idMateria: 1
    }] as Grupos;

    gestionEstudianteServicio = jasmine.createSpyObj<GestionEstudiantesService>('GestionEstudiantesService', {
      agregarEstudiante: EMPTY,
      asginarMateria: EMPTY,
      eliminarEstudiante: EMPTY,
      modificarNombreEstudiante: EMPTY,
      modificarNotasEstudiante: EMPTY,
      obtenerEstudiantes: of(estudiantesEsperados),
      obtenerMaterias: of(materiasEsperadas),
      removerMateria: EMPTY
    });

    TestBed.configureTestingModule({
      declarations: [GestionEstudiantesListadoComponent],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('gestionEstudiantes', fromGestionEstudiantes.reducer),
        EffectsModule.forRoot([fromGestionEstudiantes.GestionEstudiantesEffects])
      ],
      providers: [{
        provide: GestionEstudiantesService,
        useValue: gestionEstudianteServicio
      }],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    store = TestBed.inject(Store);
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
