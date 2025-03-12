import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {path: ':id', component: ProductComponent},
  {path: '', component: ProductsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
