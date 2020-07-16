import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GestionEstudiantesService } from './gestion-estudiantes.service';

describe('GestionEstudiantesService', () => {
  let service: GestionEstudiantesService;
  let httpMock: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GestionEstudiantesService]
    }));

  beforeEach(() => {
    service = TestBed.inject(GestionEstudiantesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe "obtenerEstudiantes" llamar al servicio de "inserte url" y ser una peticion "get"', () => {
    service.obtenerEstudiantes().subscribe();

    const peticion = httpMock.expectOne('inserte url equisde');

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('GET');
  });
});
