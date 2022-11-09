import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { UserProfileLayoutComponent } from './user-profile-layout/user-profile-layout.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

@NgModule({
  declarations: [UserComponent, OrderListComponent, OrderReviewComponent, UserProfileLayoutComponent, UserSettingsComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
