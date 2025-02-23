import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  isActive: boolean;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  addProduct(product: FormData): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
}
