import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionMateriasShellComponent } from './containers/gestion-materias-shell/gestion-materias-shell.component';

const routes: Routes = [
  {
    path: 'GestionMaterias',
    component: GestionMateriasShellComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionMateriasRoutingModule { }
