import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { CartItem } from '../../shared/models/cartItem';
import { CartService } from '../../shared/services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-cart',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, CommonModule, RouterModule],
  templateUrl: './my-cart.component.html',
  styleUrl: './my-cart.component.scss'
})
export class MyCartComponent {

  carrinho: CartItem [] = []

  constructor(private carService: CartService){}

  ngOnInit(): void {
    this.carService.getCartProducts().subscribe({
      next: (data) => {
        console.log('Produtos carregados:', data);
        if (data && Array.isArray(data)) {
          this.carrinho = data;
          console.log(this.carrinho)
        } else {
          console.error('Formato inesperado da resposta:', data);
        }
      },
      error: (err) => console.error('Erro ao carregar produtos', err)
    });
  }

  removeFromCart(id: any) {
    this.carService.deleteProduct(id).subscribe({
      next: () => {
        this.carrinho = this.carrinho.filter((item) => item.id !== id);
      },
      error: (err) => console.error('Erro ao remover produto do carrinho', err)
    });
  }

  getFullImageUrl(imageUrl: string | null | undefined): string {
    if (!imageUrl) {
      return 'assets/default-image.jpg';
    }
    return `http://localhost:8080${imageUrl}`;
  }

}
