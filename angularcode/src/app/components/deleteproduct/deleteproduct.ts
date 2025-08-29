import { Component } from '@angular/core';
import { ProductService } from '../../services/productservice';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-deleteproduct',
  imports: [NgFor,CommonModule],
  templateUrl: './deleteproduct.html',
  styleUrl: './deleteproduct.css'
})
export class Deleteproduct {
 products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAll().subscribe(data => {
      this.products = data as any[];
    });
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.delete(id).subscribe(() => {
        alert('🗑️ Product deleted successfully!');
        this.loadProducts();
      });
    }
  }

}
