import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfesoresShellComponent } from './gestion-profesores-shell.component';
import { Profesores } from '../../gestion-profesores.models';
import { GestionProfesoresService } from '../../gestion-profesores.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGestionProfesores from '../../state';
import { Grupo } from 'src/app/shared/shared.models';

describe('GestionProfesoresShellComponent', () => {
  let component: GestionProfesoresShellComponent;
  let fixture: ComponentFixture<GestionProfesoresShellComponent>;
  let gestionProfesoresService: jasmine.SpyObj<GestionProfesoresService>;
  let profesoresEsperados = [] as Profesores;

  beforeEach(async(() => {
    profesoresEsperados = [
      {
        grupos: [{} as Grupo],
        cedula: '19827341',
        nombre: 'Carlos',
        id: 0
      }
    ]

    gestionProfesoresService = jasmine.createSpyObj<GestionProfesoresService>('GestionProfesoresService', {
      obtenerProfesores: of(profesoresEsperados)
    })

    TestBed.configureTestingModule({
      declarations: [GestionProfesoresShellComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('gestionProfesores', fromGestionProfesores.reducer),
        EffectsModule.forRoot([fromGestionProfesores.GestionProfesoresEffects])
      ],
      providers: [{
        provide: GestionProfesoresService,
        useValue: gestionProfesoresService
      }]
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
