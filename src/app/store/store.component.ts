import {Component, OnInit} from '@angular/core';
import {ProductStoreComponent} from "../product-store/product-store.component";
import {Product, ProductService} from "../../shared/services/product.service";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    ProductStoreComponent,
    NavBarComponent,
    NgForOf
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
