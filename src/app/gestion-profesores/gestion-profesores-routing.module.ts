import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionProfesoresShellComponent } from './containers/gestion-profesores-shell/gestion-profesores-shell.component';

const routes: Routes = [
  {
    path: 'GestionProfesores',
    component: GestionProfesoresShellComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionProfesoresRoutingModule { }
