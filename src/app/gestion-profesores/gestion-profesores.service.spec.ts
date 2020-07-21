import { TestBed } from '@angular/core/testing';

import { GestionProfesoresService } from './gestion-profesores.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GestionProfesoresService', () => {
  let service: GestionProfesoresService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GestionProfesoresService]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(GestionProfesoresService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe "obtenerProfesores" llamar al servicio de "inserte url" y ser una peticion "get"', () => {
    service.obtenerProfesores().subscribe();

    const peticion = httpMock.expectOne('inserte url equisde');

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('GET');
  });
});
