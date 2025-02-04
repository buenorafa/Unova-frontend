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

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [NavBarComponent, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  loginForm: FormGroup;

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
    this.roteador.navigate(['/profile']);
  }
}
