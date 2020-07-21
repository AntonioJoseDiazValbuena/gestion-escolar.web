import { TestBed } from '@angular/core/testing';

import { GestionProfesoresService } from './gestion-profesores.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Profesor } from './gestion-profesores.models';
import { Grupo } from '../shared/shared.models';
import { environment } from 'src/environments/environment';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GestionProfesoresService', () => {
  let service: GestionProfesoresService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GestionProfesoresService],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(GestionProfesoresService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe "obtenerProfesores" ser una peticion "get"', () => {
    service.obtenerProfesores().subscribe();

    const peticion = httpMock.expectOne(service.urlProfesores);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('GET');
  });

  it('debe "agregarProfesor" ser una peticion "post"', () => {
    const profesor = {} as Profesor;

    service.agregarProfesor(profesor).subscribe();

    const peticion = httpMock.expectOne(service.urlProfesores);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('POST');
  });

  it('debe "modificarNombreProfesor" ser una peticion "put"', () => {
    const profesor = {} as Profesor;

    service.modificarNombreProfesor(profesor).subscribe();

    const peticion = httpMock.expectOne(service.urlProfesores);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('PUT');
  });

  it('debe "eliminarProfesor" ser una peticion "delete"', () => {
    const profesor = { cedula: '10076622840' } as Profesor;

    service.eliminarProfesor(profesor).subscribe();

    const urlEsperada = service.urlProfesores + profesor.cedula;

    const peticion = httpMock.expectOne(urlEsperada);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('DELETE');
  });

  it('debe "asignarMateriaAProfesor" ser una peticion "put"', () => {
    const grupo = {} as Grupo;

    service.asignarMateriaAProfesor(grupo).subscribe();

    const peticion = httpMock.expectOne(service.urlMaterias);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('PUT');
  });

  it('debe "eliminarGrupo" ser una peticion "put"', () => {
    const grupo = {} as Grupo;

    service.eliminarGrupo(grupo).subscribe();

    const urlEsperada = `${service.urlMaterias}Remover`;

    const peticion = httpMock.expectOne(urlEsperada);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('PUT');
  });

  it('debe "obtenerMaterias" ser una peticion "get"', () => {
    service.obtenerMaterias().subscribe();

    const urlEsperada = `${environment.urlBase}Materias`;

    const peticion = httpMock.expectOne(urlEsperada);

    expect(peticion).toBeTruthy();
    expect(peticion.request.method).toEqual('GET');
  });
});
