import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.scss'],
})
export class ProductStoreComponent {
  @Input() products!: Product[];
}
