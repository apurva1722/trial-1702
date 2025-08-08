import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data_in_angular');

  appName = 'Introduction to data in Angular';

  items = ['Primitive Data type', 'Primitive data array', 'Json object', 'Array of Json'];

  pDetails= {pId:101, pName:'Coco-Cola',pPrice: 50, pQty:2, pCategory: 'Beverages'}

  products = [
    { pid: 1, pname: 'Pepsi', price: 99, category: 'Beverages' },
    { pid: 2, pname: 'Fanta', price: 69, category: 'Beverages' },
    { pid: 3, pname: 'Sting', price: 49, category: 'Beverages' },
    { pid: 4, pname: 'Coffee', price: 89, category: 'Beverages' },
    { pid: 5, pname: 'Tea', price: 29, category: 'Beverages' },
    { pid: 5, pname: 'Slice', price: 39, category: 'Beverages' },
    { pid: 6, pname: 'Mirinda', price: 79, category: 'Beverages' },
    { pid: 7, pname: 'Lemon tea', price: 59, category: 'Beverages' },
    { pid: 8, pname: 'Starbucks', price: 199, category: 'Beverages' },
    { pid: 9, pname: 'Water Bottle', price: 25, category: 'Beverages' },
    { pid: 10, pname: 'Green Tea', price: 50, category: 'Beverages' }
  ];
}
