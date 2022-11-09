import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreateEditProductComponent } from './create-edit-product/create-edit-product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/create', component: CreateEditProductComponent },
  { path: 'products/:id', component: CreateEditProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
