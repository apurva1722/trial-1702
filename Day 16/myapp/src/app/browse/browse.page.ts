import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { ProductSerService } from '../services/product-ser';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, NgFor, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent]
})
export class BrowsePage implements OnInit {

  products: any[] = [];

  constructor(private productSer: ProductSerService) {}

  ngOnInit() {
    this.productSer.getProducts().subscribe(data => {
      this.products = data;
    });
  }

}
