import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

    services = ['Loan', 'Brokerage', 'Insurance', 'Banking','ATM','Debit & Credit cards']
}
