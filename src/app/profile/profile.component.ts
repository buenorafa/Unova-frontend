import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MatDividerModule } from '@angular/material/divider';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavBarComponent, MatDividerModule, CommonModule, RouterOutlet, RouterLink, FooterComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  usuario: User = new User();
  

  constructor(private roteador: Router, private userService:UserService) {
    const usuarioSalvo = sessionStorage.getItem('usuario');
    if (usuarioSalvo) {
      this.usuario = JSON.parse(usuarioSalvo);
    }
    if (this.usuario.id) {
      console.log('ID do usuário:', this.usuario.id);
      this.userService.buscar(this.usuario.id).subscribe({
        next: (user) =>{
          sessionStorage.setItem('usuario', JSON.stringify(user));
        },
    error: (error) => {
      console.error('Erro ao buscar usuario!', error)
    },
    })
    } else {
      console.error('Usuário ou ID não encontrados');
    }
    
  }




  onSubmit() {
    // const { email, senha } = this.loginForm.value;
    // console.log('Email:', email);
    // this.userService.login(email, senha).subscribe({
    //   next: (user) => {
    //     console.log('Login bem-sucedido:', user);

    //   },
    //   error: (error) => {
    //     console.error('Erro no login:', error);
    //   },
    // });
    sessionStorage.clear();
    this.roteador.navigate(['/sign-in']);
  }
}


