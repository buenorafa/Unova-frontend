import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardModule} from "@angular/material/card";
import {CommonModule, DecimalPipe} from "@angular/common";
import {Product, ProductService} from "../../shared/services/product.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-store',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.scss'],
})
export class ProductStoreComponent {
  products: any[] = [];

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar
  ) {}

  addToCart(product: any) {
    this.snackBar.open(`${product.name} foi adicionado ao carrinho!`, 'Fechar', {
      duration: 3000, // Tempo que o alerta fica visível (3s)
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log('Produtos carregados:', data);
        if (data && Array.isArray(data)) {
          this.products = data;
        } else {
          console.error('Formato inesperado da resposta:', data);
        }
      },
      error: (err) => console.error('Erro ao carregar produtos', err)
    });
  }


  getFullImageUrl(imageUrl: string | null | undefined): string {
    if (!imageUrl) {
      return 'assets/default-image.jpg';
    }
    return `http://localhost:8080${imageUrl}`;
  }

}
