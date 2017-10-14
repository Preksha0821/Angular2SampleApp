import { Component, OnInit } from '@angular/core';
import { UserServiceComponent } from '../user-service/user-service/user-service.component';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{
// name;
//   update(value){
//     this.name=value;
//   }
  user={
    firstName:null,
    lastName:null,
    email:null,
    address:{
      state:null
    }
  };
  states=['IL','NY','TX','CT','FL','CA'];

  constructor(private UserService:UserServiceComponent ) {

  }
  ngOnInit() {
  }
  addUser(){
    this.UserService.adduser(this.user)
      .subscribe(user => console.log(user));

  }
}
