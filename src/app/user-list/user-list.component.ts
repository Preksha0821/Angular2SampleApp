import { Component,OnInit } from '@angular/core';
import {UserServiceComponent} from "../user-service/user-service/user-service.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
//user;
  userObservable;
  constructor(public UserService:UserServiceComponent) {
    // UserService.getUsers()
    //   .subscribe(
    //     user => this.user=user,
    //     error=> console.log(error)
    //
    //   );
  }
  ngOnInit() : void {
    this.userObservable = this.UserService.getUsers();
  }
}
