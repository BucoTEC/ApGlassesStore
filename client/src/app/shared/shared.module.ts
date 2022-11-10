import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { ProductSearchComponent } from './product-search/product-search.component';

@NgModule({
  declarations: [MainLayoutComponent, ProductSearchComponent],
  imports: [CommonModule, RouterModule],
  exports: [MainLayoutComponent, ProductSearchComponent],
})
export class SharedModule {}
