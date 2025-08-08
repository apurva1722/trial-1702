import { Component } from '@angular/core';
import { Restdataser } from '../../services/restdataser';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [NgFor],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  _restdataser: Restdataser;
  
    constructor(restdata:Restdataser){
      this._restdataser=restdata;
    }

}
