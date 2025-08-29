import { Component } from '@angular/core';
import { ProductService } from '../../services/productservice';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateproduct',
  imports: [NgIf,FormsModule],
  templateUrl: './updateproduct.html',
  styleUrl: './updateproduct.css'
})
export class Updateproduct {
  productId: number | null = null;
  product: any = null;

  constructor(private productService: ProductService) {}

  fetchProduct() {
    if (this.productId !== null) {
      this.productService.getById(this.productId).subscribe({
        next: (data) => {
          this.product = data;
        },
        error: () => {
          alert('❌ Product not found');
          this.product = null;
        }
      });
    }
  }

  updateProduct() {
    if (this.productId !== null && this.product) {
      this.productService.update(this.productId, this.product).subscribe(() => {
        alert('✅ Product updated successfully!');
        this.productId = null;
        this.product = null;
      });
    }
  }

}
