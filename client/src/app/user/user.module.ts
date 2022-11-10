import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserComponent,
    OrderListComponent,
    OrderReviewComponent,
    UserSettingsComponent,
  ],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
