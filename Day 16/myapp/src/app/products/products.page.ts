import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NgFor, IonSegment, IonSegmentButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonIcon]
})
export class ProductsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  mens = [
    { pId: 1, pName: 'T-Shirt', pBrand: 'Nike', pPrice: 2550 },
    { pId: 2, pName: 'Jeans', pBrand: 'Levi’s', pPrice: 6000 },
    { pId: 3, pName: 'Sneakers', pBrand: 'Adidas', pPrice: 8000 },
    { pId: 4, pName: 'Jacket', pBrand: 'Puma', pPrice: 1200 },
    { pId: 5, pName: 'Watch', pBrand: 'Casio', pPrice: 1500 }
  ];

  women = [
    { pId: 6, pName: 'Dress', pBrand: 'Zara', pPrice: 7000 },
    { pId: 7, pName: 'Handbag', pBrand: 'Coach', pPrice: 2000 },
    { pId: 8, pName: 'Heels', pBrand: 'Steve Madden', pPrice: 900 },
    { pId: 9, pName: 'Scarf', pBrand: 'Gucci', pPrice: 1300 },
    { pId: 10, pName: 'Perfume', pBrand: 'Dior', pPrice: 1100 }
  ];

  kids = [
    { pId: 11, pName: 'Toy Car', pBrand: 'Hot Wheels', pPrice: 150 },
    { pId: 12, pName: 'T-Shirt', pBrand: 'Gap Kids', pPrice: 200 },
    { pId: 13, pName: 'Shoes', pBrand: 'Nike Kids', pPrice: 400 },
    { pId: 14, pName: 'Puzzle', pBrand: 'Ravensburger', pPrice: 250 },
    { pId: 15, pName: 'Backpack', pBrand: 'JanSport', pPrice: 350 }
  ];

  electronics = [
    { pId: 16, pName: 'Smartphone', pBrand: 'Samsung', pPrice: 6990 },
    { pId: 17, pName: 'Laptop', pBrand: 'Dell', pPrice: 9990 },
    { pId: 18, pName: 'Headphones', pBrand: 'Sony', pPrice: 1990 },
    { pId: 19, pName: 'Smartwatch', pBrand: 'Apple', pPrice: 3990 },
    { pId: 20, pName: 'Camera', pBrand: 'Canon', pPrice: 5990 }
  ];

  selectedCategory = 'mens';

  getProductsByCategory() {
  switch (this.selectedCategory) {
    case 'mens': return this.mens;
    case 'women': return this.women;
    case 'kids': return this.kids;
    case 'electronics': return this.electronics;
    default: return [];
  }
}



}
