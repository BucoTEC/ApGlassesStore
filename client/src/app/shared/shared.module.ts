import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    ProductSearchComponent,
    ProductCardComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [MainLayoutComponent, ProductSearchComponent, ProductCardComponent],
})
export class SharedModule {}
