import { TestBed } from '@angular/core/testing';

import { GestionEstudiantesService } from './gestion-estudiantes.service';

describe('GestionEstudiantesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionEstudiantesService = TestBed.get(GestionEstudiantesService);
    expect(service).toBeTruthy();
  });
});
