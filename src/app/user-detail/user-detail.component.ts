import { Component, OnInit } from '@angular/core';
import {UserServiceComponent} from "../user-service/user-service/user-service.component";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
user;
  constructor(private route: ActivatedRoute,private UserService:UserServiceComponent) {
    this.route.params.subscribe(params=>{
      UserService.getUserById(params.id)
        .subscribe(
          user => this.user=user
        );
    })
  }

  ngOnInit() {
  }

}
