import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [SiteLayoutComponent],
  imports: [CommonModule, MenubarModule],
  exports: [SiteLayoutComponent],
})
export class LayoutModule {}
