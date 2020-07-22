import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionMateriasRoutingModule } from './gestion-materias-routing.module';
import { GestionMateriasShellComponent } from './containers/gestion-materias-shell/gestion-materias-shell.component';
import { GestionMateriasListadoComponent } from './components/gestion-materias-listado/gestion-materias-listado.component';
import { GestionMateriasFormularioComponent } from './components/gestion-materias-formulario/gestion-materias-formulario.component';

import * as fromGestionMaterias from './state';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionMateriasService } from './gestion-materias.service';

@NgModule({
  declarations: [
    GestionMateriasShellComponent,
    GestionMateriasListadoComponent,
    GestionMateriasFormularioComponent
  ],
  imports: [
    CommonModule,
    GestionMateriasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('gestionMaterias', fromGestionMaterias.reducer),
    EffectsModule.forFeature([fromGestionMaterias.GestionMateriasEffects])
  ],
  providers: [
    GestionMateriasService
  ]
})
export class GestionMateriasModule { }
