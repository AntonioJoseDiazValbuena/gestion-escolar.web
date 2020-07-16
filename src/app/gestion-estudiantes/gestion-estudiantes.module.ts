import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GestionEstudiantesRoutingModule } from './gestion-estudiantes-routing.module';
import { GestionEstudiantesShellComponent } from './containers/gestion-estudiantes-shell/gestion-estudiantes-shell.component';
import { GestionEstudiantesService } from './gestion-estudiantes.service';
import { StoreModule } from '@ngrx/store';
import { reducer, GestionEstudiantesEffects } from './state';
import { EffectsModule } from '@ngrx/effects';
import { GestionEstudiantesListadoComponent } from './components/gestion-estudiantes-listado/gestion-estudiantes-listado.component';
import {
  GestionEstudiantesFormularioComponent
} from './components/gestion-estudiantes-formulario/gestion-estudiantes-formulario.component';


@NgModule({
  declarations: [GestionEstudiantesShellComponent, GestionEstudiantesListadoComponent, GestionEstudiantesFormularioComponent],
  imports: [
    CommonModule,
    GestionEstudiantesRoutingModule,
    FormsModule,
    StoreModule.forFeature('estudiantes', reducer),
    EffectsModule.forFeature([GestionEstudiantesEffects])
  ],
  providers: [
    GestionEstudiantesService
  ]
})
export class GestionEstudiantesModule { }
