import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GestionProfesoresRoutingModule } from './gestion-profesores-routing.module';
import { GestionProfesoresShellComponent } from './containers/gestion-profesores-shell/gestion-profesores-shell.component';
import { GestionProfesoresFormularioComponent } from './components/gestion-profesores-formulario/gestion-profesores-formulario.component';
import { GestionProfesoresListadoComponent } from './components/gestion-profesores-listado/gestion-profesores-listado.component';
import { GestionProfesoresService } from './gestion-profesores.service';
import * as fromGestionProfesores from './state';

@NgModule({
  declarations: [
    GestionProfesoresShellComponent,
    GestionProfesoresFormularioComponent,
    GestionProfesoresListadoComponent
  ],
  imports: [
    CommonModule,
    GestionProfesoresRoutingModule,
    FormsModule,
    StoreModule.forFeature('gestionProfesores', fromGestionProfesores.reducer),
    EffectsModule.forFeature([fromGestionProfesores.GestionProfesoresEffects])
  ],
  providers: [
    GestionProfesoresService
  ]
})
export class GestionProfesoresModule { }
