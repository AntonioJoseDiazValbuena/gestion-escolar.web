import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GestionEstudiantesService } from './gestion-estudiantes.service';
import { Estudiante, MateriaEstudiante } from './gestion-estudiantes.models';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GestionEstudiantesService', () => {
  let service: GestionEstudiantesService;
  let httpMock: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GestionEstudiantesService],
      schemas: [NO_ERRORS_SCHEMA]
    }));

  beforeEach(() => {
    service = TestBed.inject(GestionEstudiantesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe "obtenerEstudiantes" ser una peticion "get"', () => {
    service.obtenerEstudiantes().subscribe();

    const peticion = httpMock.expectOne(service.urlEstudiantes);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('GET');
  });

  it('debe "obtenerMaterias" ser una peticion "get"', () => {
    service.obtenerMaterias().subscribe();

    const peticion = httpMock.expectOne(service.urlMaterias);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('GET');
  });

  it('debe "agregarEstudiante" ser una peticion "post"', () => {
    const estudiante = {} as Estudiante;

    service.agregarEstudiante(estudiante).subscribe();

    const peticion = httpMock.expectOne(service.urlEstudiantes);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('POST');
  });

  it('debe "modificarNotasEstudiante" ser una peticion "put"', () => {
    const materia = {} as MateriaEstudiante;

    service.modificarNotasEstudiante(materia).subscribe();

    const urlEsperada = `${service.urlMaterias}Calificaciones`

    const peticion = httpMock.expectOne(urlEsperada);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('PUT');
  });

  it('debe "asginarMateria" ser una peticion "put"', () => {
    const materia = {} as MateriaEstudiante;

    service.asginarMateria(materia).subscribe();

    const peticion = httpMock.expectOne(service.urlMaterias);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('PUT');
  });

  it('debe "removerMateria" ser una peticion "put"', () => {
    const materia = {} as MateriaEstudiante;

    service.removerMateria(materia).subscribe();

    const urlEsperada = `${service.urlMaterias}Remover`

    const peticion = httpMock.expectOne(urlEsperada);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('PUT');
  });

  it('debe "modificarNombreEstudiante" ser una peticion "put"', () => {
    const estudiante = {} as Estudiante;

    service.modificarNombreEstudiante(estudiante).subscribe();

    const peticion = httpMock.expectOne(service.urlEstudiantes);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('PUT');
  });

  it('debe "eliminarEstudiante" ser una peticion "delete"', () => {
    const estudiante = { tarjetaIdentidad: '1007465364' } as Estudiante;

    service.eliminarEstudiante(estudiante).subscribe();

    const urlEsperada = service.urlEstudiantes + estudiante.tarjetaIdentidad;

    const peticion = httpMock.expectOne(urlEsperada);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('DELETE');
  });
});
