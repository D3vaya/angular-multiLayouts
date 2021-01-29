import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [SignupComponent, LoginComponent, PageNotFoundComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
