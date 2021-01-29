import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrivateHeaderComponent } from './private-header/private-header.component';
import { PrivateFooterComponent } from './private-footer/private-footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PrivateHeaderComponent,
    PrivateFooterComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PrivateHeaderComponent,
    PrivateFooterComponent,
  ],
  imports: [CommonModule, SharedRoutingModule],
})
export class SharedModule {}
