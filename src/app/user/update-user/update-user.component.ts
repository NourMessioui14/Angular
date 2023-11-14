import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Core/Services/user.service';
import { User } from 'src/app/Models/us';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  id!:number;
  user!:User;
  updateForm!:FormGroup;

  constructor(private userS:UserService,private actR:ActivatedRoute,private R:Router){}
 
  update(){
    this.userS.updateUser(this.user).subscribe((data)=>this.R.navigate(['/users'])  );
  }
  ngOnInit():void{
    this.getId()
    this.userS.getUserById(this.id).subscribe((data) => {this.user=data;
    this.updateForm=new FormGroup({
      id:new FormControl(this.user.id),
      fn:new FormControl(this.user.firstName),
      ln:new FormControl(this.user.lastName),
      bd:new FormControl(this.user.birthDate),
      email:new FormControl(this.user.email),
      password:new FormControl(this.user.password),
      profession:new FormControl(this.user.profession),
      accountcatg:new FormControl(this.user.accountCategory),
      pic:new FormControl(this.user.picture),
    })
    });
  }
  getId(){
    this.actR.paramMap.subscribe(data => this.id=Number(data.get('id')));
  }
 

}
