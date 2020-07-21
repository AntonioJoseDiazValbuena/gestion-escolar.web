import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GestionEstudiantesRoutingModule } from './gestion-estudiantes-routing.module';
import { GestionEstudiantesShellComponent } from './containers/gestion-estudiantes-shell/gestion-estudiantes-shell.component';
import { GestionEstudiantesService } from './gestion-estudiantes.service';
import * as fromGestionEstudiantes from './state';
import { GestionEstudiantesListadoComponent } from './components/gestion-estudiantes-listado/gestion-estudiantes-listado.component';
import {
  GestionEstudiantesFormularioComponent
} from './components/gestion-estudiantes-formulario/gestion-estudiantes-formulario.component';
import { GestionEstudiantesNotasComponent } from './components/gestion-estudiantes-notas/gestion-estudiantes-notas.component';
import { GestionEstudiantesMateriasComponent } from './components/gestion-estudiantes-materias/gestion-estudiantes-materias.component';

@NgModule({
  declarations: [
    GestionEstudiantesShellComponent,
    GestionEstudiantesListadoComponent,
    GestionEstudiantesFormularioComponent,
    GestionEstudiantesNotasComponent,
    GestionEstudiantesMateriasComponent
  ],
  imports: [
    CommonModule,
    GestionEstudiantesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('gestionEstudiantes', fromGestionEstudiantes.reducer),
    EffectsModule.forFeature([fromGestionEstudiantes.GestionEstudiantesEffects])
  ],
  providers: [
    GestionEstudiantesService
  ]
})
export class GestionEstudiantesModule { }
