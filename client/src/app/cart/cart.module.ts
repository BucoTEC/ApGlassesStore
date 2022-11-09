import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';

@NgModule({
  declarations: [CartComponent, CartPageComponent, CheckoutPageComponent],
  imports: [CommonModule, CartRoutingModule],
})
export class CartModule {}
