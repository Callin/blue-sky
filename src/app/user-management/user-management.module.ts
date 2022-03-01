import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { UserManagementComponent } from './user-management.component';

@NgModule({
  declarations: [UsersComponent, UserManagementComponent],
  exports: [
    UsersComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class UserManagementModule {
}
