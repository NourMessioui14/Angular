import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ListProductComponent } from './list-product/list-product.component';

const routes: Routes = [
  {path:"",component:ProductComponent},
  {path:"listProduct",component:ListProductComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
