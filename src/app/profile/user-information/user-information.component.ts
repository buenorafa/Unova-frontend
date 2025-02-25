import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../shared/services/user.service';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';


@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.scss'
})
export class UserInformationComponent {
usuario: User = new User();
editForm: FormGroup;
edicao: boolean = false


  constructor(private fb:FormBuilder, private userService:UserService, private sweetAlert:SweetAlertService, private router:Router){
    const usuarioSalvo = sessionStorage.getItem('usuario');
    if (usuarioSalvo) {
      this.usuario = JSON.parse(usuarioSalvo);
    }
        this.editForm = this.fb.group({
        name: [this.usuario.name, [Validators.required]],
        username: [this.usuario.username, [Validators.required]],
        phoneNumber: [this.usuario.phoneNumber, [Validators.required]],
        address: [this.usuario.address, [Validators.required]],
        email: [this.usuario.email, [Validators.required, Validators.email]],
      });
  }

  openmodal(){
    document.getElementById("edit-modal")?.classList.remove("hidden");
  
  }

  closemodal(){
    document.getElementById("edit-modal")?.classList.add("hidden");
  }

  onSubmit(){
  if (this.editForm.valid){
    this.usuario.name = this.editForm.get('name')!.value;
    this.usuario.username = this.editForm.get('username')!.value;
    this.usuario.phoneNumber = this.editForm.get('phoneNumber')!.value;
    this.usuario.address = this.editForm.get('address')!.value;
    this.usuario.email = this.editForm.get('email')!.value;

    this.userService.editar(this.usuario).subscribe({
      next: () => {
        this.sweetAlert.sucesso('Usuário atualizado com sucesso!');
        this.router.navigate(['/profile/my-information']);
        // Lógica após cadastro bem-sucedido (e.g., redirecionar para a tela de login)
      },
      error: (err) => {
        this.sweetAlert.erro('Erro ao atualizar dados!');
        console.error('Erro na atualização:', err);
        // Exibir mensagem de erro
      }

    });
  }
}

}
