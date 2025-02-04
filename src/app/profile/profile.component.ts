import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavBarComponent, MatDividerModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  products = [
    {
      id: 1,
      image: '/assets/imgs/pokemon-box1.png',
      name: 'COPAG Box Cartas Pokémon Treinador Avançado Obsidiana em Chamas',
      price: 'R$ 359,90',
      quantity: 1,
    },
    {
      id: 2,
      image: '/assets/imgs/pokemon-box2.png',
      name: 'Box Cards Pokémon Deck Batalha De Liga Gardevoir Ex - Copa',
      price: 'R$ 159,90',
      quantity: 2,
    },
    {
      id: 3,
      image: '/assets/imgs/pokemon-box3.png',
      name: 'Pokémon TCG: Box Coleção com Miniatura - Tapu Koko',
      price: 'R$ 157,37',
      quantity: 1,
    },
  ];

  constructor(private roteador: Router) {}
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
