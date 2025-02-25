import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../shared/services/product.service';


@Component({
  selector: 'app-my-products',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './my-products.component.html',
  styleUrl: './my-products.component.scss'
})
export class MyProductsComponent {

products:Product [] = []

  constructor(private productService:ProductService){
    this.productService.getProducts().subscribe({
      next: (produtos) => { this.products = produtos
      },
      error:(error) =>{
        console.error('Erro ao carregar produtos:', error);
      }
    })

    }

    
    getFullImageUrl(imageUrl: string | null | undefined): string {
      if (!imageUrl) {
        return 'assets/default-image.jpg';
      }
      return `http://localhost:8080${imageUrl}`;
    }


  }

  // products = [
  //   {
  //     id: 1,
  //     image: '/assets/imgs/pokemon-box1.png',
  //     name: 'COPAG Box Cartas Pokémon Treinador Avançado Obsidiana em Chamas',
  //     price: 'R$ 359,90',
  //     quantity: 1,
  //   },
  //   {
  //     id: 2,
  //     image: '/assets/imgs/pokemon-box2.png',
  //     name: 'Box Cards Pokémon Deck Batalha De Liga Gardevoir Ex - Copa',
  //     price: 'R$ 159,90',
  //     quantity: 2,
  //   },
  //   {
  //     id: 3,
  //     image: '/assets/imgs/pokemon-box3.png',
  //     name: 'Pokémon TCG: Box Coleção com Miniatura - Tapu Koko',
  //     price: 'R$ 157,37',
  //     quantity: 1,
  //   },
  // ];

// }
