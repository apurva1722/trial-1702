import { Component } from '@angular/core';
import { ProductService } from '../../services/productservice';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addproduct',
  imports: [FormsModule,CommonModule],
  templateUrl: './addproduct.html',
  styleUrl: './addproduct.css'
})
export class Addproduct {

product = {
    _id: null,
    pName: '',
    pPrice: null,
    pBrand: '',
    pIsInStock: true
  };

  constructor(private productService: ProductService) {}

  addProduct() {
    this.productService.add(this.product).subscribe({
      next: () => {
        alert('✅ Product added successfully!');
        this.product = {
          _id: null,
          pName: '',
          pPrice: null,
          pBrand: '',
          pIsInStock: true
        };
      },
      error: () => {
        alert('❌ Failed to add product.');
      }
    });
  }


}
