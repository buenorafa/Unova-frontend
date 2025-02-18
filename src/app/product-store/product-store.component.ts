import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {Product} from "../services/product.service";
import {Input} from "postcss";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-product-store',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    DecimalPipe
  ],
  templateUrl: './product-store.component.html',
  styleUrl: './product-store.component.scss'
})
export class ProductStoreComponent {
  @Input() product!: Product;
}
