import { Routes } from '@angular/router';

export const PRIVATE_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('../product/product.module').then((m) => m.ProductModule),
  },
];
