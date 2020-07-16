import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-shell',
  templateUrl: './inicio-shell.component.html',
  styleUrls: ['./inicio-shell.component.scss']
})
export class InicioShellComponent {

  constructor(private router: Router) { }

  gestionarEstudiantes() {
    this.router.navigateByUrl('GestionEstudiantes');
  }

  gestionarProfesores() {

  }

  gestionarMaterias() {

  }
}
