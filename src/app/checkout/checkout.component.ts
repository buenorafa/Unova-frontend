import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NavBarComponent, CommonModule, FooterComponent, FormsModule, MatCardContent, MatCard, MatCardTitle],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  paymentMethod: string = 'pix';
  total: any

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.total = this.route.snapshot.paramMap.get('total'); // Obtém o total da URL
  console.log(this.total);
}
}
