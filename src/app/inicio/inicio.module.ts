import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioShellComponent } from './containers/inicio-shell/inicio-shell.component';


@NgModule({
  declarations: [InicioShellComponent],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
