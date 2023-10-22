import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from '../product/product.component';
import { ListProductComponent } from './list-product/list-product.component';


@NgModule({
  declarations: [
    ProductComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
