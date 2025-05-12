import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'tokens',
    loadComponent: () => import('./pages/tokens/tokens.component').then(m => m.TokensComponent)
  },
  {
    path: 'mapping',
    loadComponent: () => import('./pages/mapping/mapping.component').then(m => m.MappingComponent)
  },
  {
    path: 'components',
    loadComponent: () => import('./pages/components/components.component').then(m => m.ComponentsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
]; 