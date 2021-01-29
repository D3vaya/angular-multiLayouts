import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';
import { PRIVATE_ROUTES } from './routes/private-layout.routes';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { PUBLIC_ROUTES } from './routes/public-layout.routes';
import { AUTH_ROUTES } from './routes/auth-layout.routes';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: PUBLIC_ROUTES,
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: AUTH_ROUTES,
  },
  {
    path: 'admin',
    component: PrivateLayoutComponent,
    children: PRIVATE_ROUTES,
  },
  { path: '**', redirectTo: '/auth/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
