import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLogoutComponent } from './user-logout/user-logout.component';


@NgModule({
  declarations: [UserLogoutComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
