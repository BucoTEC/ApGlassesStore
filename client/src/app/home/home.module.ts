import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MainHeroBannerComponent } from './main-hero-banner/main-hero-banner.component';

@NgModule({
  declarations: [HomeComponent, MainHeroBannerComponent],
  imports: [CommonModule, SharedModule],
})
export class HomeModule {}
