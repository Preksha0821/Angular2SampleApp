import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UserServiceComponent } from './user-service/user-service/user-service.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserServiceComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
