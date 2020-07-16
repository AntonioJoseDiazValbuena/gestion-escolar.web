import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionEstudiantesShellComponent } from './containers/gestion-estudiantes-shell/gestion-estudiantes-shell.component';

const routes: Routes = [
  {
    path: 'GestionEstudiantes',
    component: GestionEstudiantesShellComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionEstudiantesRoutingModule { }
