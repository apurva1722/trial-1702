import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonChip, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonRow, IonGrid, IonCol, IonButtons, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, NgFor, IonIcon, IonChip, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonRow, IonGrid, IonCol, IonButtons, IonLabel, RouterLink ],
})
export class HomePage {
  constructor() {}

  developedBy = 'Apurva Alhat';
  // isLoggedIn = false;

  greetUser()
  {
    alert('Welcome to mobile web development!');
  }

  productList = [{ pId: 101, pName: "Wireless Mouse", pBrand: "Logitech", pPrice: 299 },
  { pId: 102, pName: "Mechanical Keyboard", pBrand: "Corsair", pPrice: 899 },
  { pId: 103, pName: "HD Monitor", pBrand: "Dell", pPrice: 149 },
  { pId: 104, pName: "External SSD", pBrand: "Samsung", pPrice: 119 },
  { pId: 105, pName: "Bluetooth Speaker", pBrand: "JBL", pPrice: 599 },
  { pId: 106, pName: "Laptop", pBrand: "Apple Macbook", pPrice: 59990 }]



  // toggleLogin() {
  //   this.isLoggedIn = !this.isLoggedIn;
  // }
 
  

}
