import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../shared/models/user';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [NavBarComponent, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  loginForm: FormGroup;
  usuario:User = new User();

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private roteador: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const { email, senha } = this.loginForm.value;
    console.log('Email:', email);
    this.userService.login(email, senha).subscribe({
      next: (user) => {
        this.usuario = user
        console.log('Login bem-sucedido:', this.usuario);
        sessionStorage.setItem('usuario', JSON.stringify(this.usuario));
        this.roteador.navigate(['/profile']);
      },
      error: (error) => {
        console.error('Erro no login:', error);
      },
    });
  }
}
