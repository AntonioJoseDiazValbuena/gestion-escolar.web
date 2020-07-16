import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioShellComponent } from './containers/inicio-shell/inicio-shell.component';


const routes: Routes = [
  {
    path: '',
    component: InicioShellComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
