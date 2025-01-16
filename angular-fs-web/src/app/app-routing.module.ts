import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:"listOfProducts", component:ProductListComponent},
  {path:"addProducts", component:AddProductComponent},
  {path:"editProducts", component:ProductComponent},
  {path:"deleteProducts", component:ProductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
