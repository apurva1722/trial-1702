import { Routes } from '@angular/router';
import { Security } from './services/security';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'transfer',
    loadComponent: () => import('./transfer/transfer.page').then( m => m.TransferPage), canActivate:[Security]
  },
  {
    path: 'viewdetails',
    loadComponent: () => import('./viewdetails/viewdetails.page').then( m => m.ViewdetailsPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },

];
