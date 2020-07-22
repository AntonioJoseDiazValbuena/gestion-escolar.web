import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: '',
    loadChildren: () => import('src/app/gestion-estudiantes/gestion-estudiantes.module').then(m => m.GestionEstudiantesModule)
  },
  {
    path: '',
    loadChildren: () => import('src/app/gestion-profesores/gestion-profesores.module').then(m => m.GestionProfesoresModule)
  },
  {
    path: '',
    loadChildren: () => import('src/app/gestion-materias/gestion-materias.module').then(m => m.GestionMateriasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
