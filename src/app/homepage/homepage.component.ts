import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

interface Product {
  image: string;
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavBarComponent, CommonModule, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Product[]>('/assets/products.json').subscribe((data) => {
      this.products = data;
    });
  }
}
