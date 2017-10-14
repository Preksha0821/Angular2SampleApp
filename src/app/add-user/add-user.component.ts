import { Component, OnInit } from '@angular/core';
import { UserServiceComponent } from '../user-service/user-service/user-service.component';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
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

  constructor(private UserService:UserServiceComponent, private router: Router ) {

  }
  ngOnInit() : void {

  }


  addUser(){
    this.UserService.adduser(this.user)
      .subscribe(user => {
        console.log(user);
        this.router.navigate(['/users']);
      });

  }

}
