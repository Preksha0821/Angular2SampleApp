import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";
import{RouterModule, Routes, ActivatedRoute} from '@angular/router';


import { AppComponent } from './app.component';
import { UserServiceComponent } from './user-service/user-service/user-service.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddUserComponent } from './add-user/add-user.component';

const appRoutes: Routes = [
  { path: 'users', component: UserListComponent},
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    UserServiceComponent,
    UserFormComponent,
    UserListComponent,
    UserDetailComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes,{ useHash: true }),
  ],
  providers: [UserServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
