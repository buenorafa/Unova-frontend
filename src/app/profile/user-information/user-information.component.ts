import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss'
})
export class UserInformationComponent {
usuario!:User | undefined;


  constructor(){
    const usuarioSalvo = sessionStorage.getItem('usuario');
    if (usuarioSalvo) {
      this.usuario = JSON.parse(usuarioSalvo);
    }
  }

}
