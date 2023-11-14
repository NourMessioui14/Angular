import { Component } from '@angular/core';
import { UserService } from 'src/app/Core/Services/user.service';
import { Router } from '@angular/router'; // Importez le module de routage
import { NgForm } from '@angular/forms';
import { User } from 'src/app/Models/us';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
})
export class AddUserComponent {
  
  searchItem!:String ; 
  List_user:User[]=[];
  newUser!:User;


  

  constructor(private Router:Router, private users:UserService){
  }
 
  
 /*  adduser()
  {
    this.users.addUser(this.user).subscribe(()=>{alert('added succefully');
    this.Router.navigate(['useres']);
  }
  
    ); */

    add(F: NgForm) {
      console.log(this.List_user.length);
    
      if (F.valid) {
        this.newUser = {
          id: (this.List_user.length + 1).toString(),
          firstName: F.value.firstName,
          lastName: F.value.lastName,
          birthDate: F.value.birthDate,
          email: F.value.email,
          password: F.value.password,
          profession: F.value.profession,
          accountCategory: F.value.accountCategory,
          picture: F.value.picture,
        };
    
        this.users.addUser(this.newUser).subscribe(
          () => {
            alert('Added successfully');
            F.resetForm();
          },
          (error) => {
            console.error('Error adding user:', error);
          }
        );
      }
    }
    


    }