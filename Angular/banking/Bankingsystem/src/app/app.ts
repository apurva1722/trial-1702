import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { StockPortfolio } from './components2/stock-portfolio/stock-portfolio';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, StockPortfolio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bankingsystem');
}
