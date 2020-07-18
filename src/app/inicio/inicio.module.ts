import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioShellComponent } from './containers/inicio-shell/inicio-shell.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [InicioShellComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
  ]
})
export class InicioModule { }
