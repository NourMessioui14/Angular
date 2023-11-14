import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Core/Services/user.service';
import { User } from 'src/app/Models/us';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  searchItem!:String ; 
  List_user:User[]=[];
  newUser!:User;


 
constructor(private Router:Router, private users:UserService){
}
ngOnInit() {
  this.users.getAllUsers().subscribe(
    (data: any) => {
      this.List_user = data;
    },
    (error) => {
      console.error('Une erreur s\'est produite :', error);
    }
  );
}



deleteUser(id:string) {
  console.log(id)
  this.users.deleteUser(id).subscribe(()=>alert('id deletefd'));
}

//adduser()
//{
  //this.users.addUser(this.user).subscribe(()=>{alert('added succefully');
  //this.Router.navigate(['useres']);
//}

  //);

//}





   
 }


