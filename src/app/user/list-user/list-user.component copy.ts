import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Core/Services/user.service';
import { user } from 'src/app/Models/us';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  List_user: user[] = [];

  constructor(private users: UserService) {}

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
}

