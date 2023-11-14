import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';

const routes: Routes = [

  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"users",loadChildren :()=> import ('./user/user.module').then(m=>m.UserModule)},
  {path:'providers', loadChildren:()=> import ('./provider/provider.module').then(m=>m.ProviderModule)},
  {path :"products",loadChildren:()=> import ('./product/product.module').then(m=>m.ProductModule)},
  {path:"addUser",component:AddUserComponent},
  {path:'listUser',component:ListUserComponent},
  {path:'listProduct',component:ListProductComponent},
{path:"**",component:ErrorPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
