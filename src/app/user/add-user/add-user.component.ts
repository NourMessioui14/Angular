import { Component } from '@angular/core';
import { UserService } from 'src/app/Core/Services/user.service';
import { user } from 'src/app/Models/us';
import { Router } from '@angular/router'; // Importez le module de routage
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
})
export class AddUserComponent {
  
  searchItem!:String ; 
  List_user:user[]=[];

  user!:user;

  

  constructor(private Router:Router, private users:UserService){
  }
 
  deleteUser(id:string) {
    console.log(id)
    this.users.deleteUser(id).subscribe(()=>alert('id deletefd'));
  }
  
 /*  adduser()
  {
    this.users.addUser(this.user).subscribe(()=>{alert('added succefully');
    this.Router.navigate(['useres']);
  }
  
    ); */

    add(F:NgForm){
    console.log(F.controls['fn'].value);
    }
    addUser(addForm: NgForm) {
      if (addForm.valid) {
        const newUser: user = {
          id: (this.List_user.length + 1).toString(),
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          birthDate: this.user.birthDate,
          email: this.user.email,
          password: this.user.password,
          profession: this.user.profession,
          accountCategory: this.user.accountCategory,
          picture: this.user.picture,
        };
  
        this.List_user.push(newUser);
        addForm.resetForm();
      }
    }
  
  }
  




