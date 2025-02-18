import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from "../services/product.service";
import {ProductStoreComponent} from "../product-store/product-store.component";

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    ProductStoreComponent
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
