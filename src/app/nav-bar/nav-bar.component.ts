import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { User } from '../../shared/models/user';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  usuario!:User | undefined;

  constructor() {
    const usuarioSalvo = sessionStorage.getItem('usuario');
    if (usuarioSalvo) {
      this.usuario = JSON.parse(usuarioSalvo);
    }
   }

}
