import { Component } from '@angular/core';
import {UserServiceComponent} from "./user-service/user-service/user-service.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
user;
constructor(UserService:UserServiceComponent){
  this.user=UserService.getUsers();
}
}
