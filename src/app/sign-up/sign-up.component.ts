import { Component, signal } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user';
import { SweetAlertService } from '../../shared/services/sweet-alert.service';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [NavBarComponent, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {

hide = signal(true);
registerForm: FormGroup;
user = new User();

clickEvent(event: MouseEvent) {
  this.hide.set(!this.hide());
  event.stopPropagation();
}

constructor(private fb:FormBuilder,  private roteador: Router, private userService: UserService, private sweetAlert: SweetAlertService) { 
    this.registerForm = this.fb.group({
    nome: ['', [Validators.required]],
    username: ['', [Validators.required]],
    telefone: ['', [Validators.required]],
    endereco: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]]
  });

}

onSubmit() {
  if (this.registerForm.valid) {
    this.user.name = this.registerForm.get('nome')!.value;
    this.user.username = this.registerForm.get('username')!.value;
    this.user.phoneNumber = this.registerForm.get('telefone')!.value;
    this.user.address = this.registerForm.get('endereco')!.value;
    this.user.email = this.registerForm.get('email')!.value;
    this.user.password = this.registerForm.get('senha')!.value;

    this.userService.cadastrar(this.user).subscribe({
      next: () => {
        this.sweetAlert.sucesso('Usuário cadastrado com sucesso!');
        this.roteador.navigate(['/sign-in']);
        // Lógica após cadastro bem-sucedido (e.g., redirecionar para a tela de login)
      },
      error: (err) => {
        this.sweetAlert.erro('Erro no cadastro!');
        console.error('Erro no cadastro:', err);
        // Exibir mensagem de erro
      }
  });

}
}
}
