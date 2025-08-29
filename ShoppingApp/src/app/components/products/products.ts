import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../services/productservice';

@Component({
  selector: 'app-products',
  imports: [NgFor],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
      products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      this.products = data as any[];
    });
  }

}
