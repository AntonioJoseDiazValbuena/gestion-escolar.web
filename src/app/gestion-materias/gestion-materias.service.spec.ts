import { TestBed } from '@angular/core/testing';

import { GestionMateriasService } from './gestion-materias.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Materia } from '../shared/shared.models';

describe('GestionMateriasService', () => {
  let service: GestionMateriasService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GestionMateriasService],
      schemas: [NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(GestionMateriasService);
  });

  beforeEach(() => {
    service = TestBed.inject(GestionMateriasService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe "obtenerMaterias" ser una peticion "get"', () => {
    service.obtenerMaterias().subscribe();

    const peticion = httpMock.expectOne(service.urlMaterias);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('GET');
  });

  it('debe "agregarMateria" ser una peticion "post"', () => {
    const materia = {} as Materia;

    service.agregarMateria(materia).subscribe();

    const peticion = httpMock.expectOne(service.urlMaterias);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('POST');
  });

  it('debe "eliminarMateria" ser una peticion "delete"', () => {
    const materia = { id: 1 } as Materia;

    service.eliminarMateria(materia).subscribe();

    const urlEsperada = service.urlMaterias + materia.id;

    const peticion = httpMock.expectOne(urlEsperada);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('DELETE');
  });
});
