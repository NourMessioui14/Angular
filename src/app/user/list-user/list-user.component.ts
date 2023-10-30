import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/Core/Services/user.service';
import { user } from 'src/app/Models/us';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  SearchItem!:String;
  list: user[] = [ ]; 
  users$!: Observable<user[]>;

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (data: any) => {
        this.list = data.users;
      },
      (error) => {
        console.error('Une erreur s\'est produite :', error);
      }
    );
  }


  

  constructor(private userService: UserService){
    this.SearchItem='';
    
  }


}

