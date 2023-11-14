import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {path :"", component:UserComponent},
  {path:"listUser",component:ListUserComponent},
  {path :"editUser/:id",component:UpdateUserComponent},
  {path:"addUser",component:AddUserComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
