import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MainHeroBannerComponent } from './main-hero-banner/main-hero-banner.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [HomeComponent, MainHeroBannerComponent, ProductListComponent],
  imports: [CommonModule, SharedModule],
})
export class HomeModule {}
