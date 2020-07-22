import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMateriasShellComponent } from './gestion-materias-shell.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromGestionMaterias from '../../state';
import { GestionMateriasService } from '../../gestion-materias.service';
import { EMPTY } from 'rxjs';

describe('GestionMateriasShellComponent', () => {
  let component: GestionMateriasShellComponent;
  let fixture: ComponentFixture<GestionMateriasShellComponent>;
  let gestionMateriasService: jasmine.SpyObj<GestionMateriasService>;

  beforeEach(async(() => {
    gestionMateriasService = jasmine.createSpyObj<GestionMateriasService>('GestionMateriasService', {
      agregarMateria: EMPTY
    });

    TestBed.configureTestingModule({
      declarations: [GestionMateriasShellComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('gestionMaterias', fromGestionMaterias.reducer),
        EffectsModule.forRoot([fromGestionMaterias.GestionMateriasEffects])
      ],
      providers: [{
        provide: GestionMateriasService,
        useValue: gestionMateriasService
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMateriasShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
