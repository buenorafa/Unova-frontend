import {Component, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';
import {SweetAlertService} from '../../shared/services/sweet-alert.service';
import {Product} from '../../shared/models/product';
import {FooterComponent} from "../footer/footer.component";
import {NavBarComponent} from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, FooterComponent, NavBarComponent],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {

  hide = signal(true);
  productForm: FormGroup;
  product = new Product();
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productService: ProductService,
    private sweetAlert: SweetAlertService
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      isActive: [true],
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit() {
    if (this.productForm.valid && this.selectedFile) {
      this.product.name = this.productForm.get('name')!.value;
      this.product.description = this.productForm.get('description')!.value;
      this.product.price = this.productForm.get('price')!.value;
      this.product.quantity = this.productForm.get('quantity')!.value;
      this.product.isActive = this.productForm.get('isActive')!.value;

      const formData = new FormData();
      formData.append('name', this.product.name);
      formData.append('description', this.product.description);
      formData.append('price', this.product.price.toString());
      formData.append('quantity', this.product.quantity.toString());
      formData.append('isActive', this.product.isActive.toString());
      formData.append('image', this.selectedFile);

      this.productService.addProduct(formData).subscribe({
        next: () => {
          this.sweetAlert.sucesso('Produto cadastrado com sucesso!');
          this.router.navigate(['/store']);
        },
        error: (err) => {
          this.sweetAlert.erro('Erro ao cadastrar produto!');
          console.error('Erro no cadastro:', err);
        }
      });
    }
  }
}
