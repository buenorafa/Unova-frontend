import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MatDividerModule } from '@angular/material/divider';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavBarComponent, MatDividerModule, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  usuario:any;
  
  

  constructor(private roteador: Router, private userService:UserService) {
    const navigation = this.roteador.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.usuario = navigation.extras.state['id'];
    }

    
  }
  ngOninit(){
    if (this.usuario.id) {
      this.userService.buscar(this.usuario.id).subscribe({
        next: (user) =>{
          this.usuario = user
          console.log(this.usuario)
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
    this.roteador.navigate(['/sign-in']);
  }
}
