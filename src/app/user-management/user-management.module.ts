import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { UserManagementComponent } from './user-management.component';
import {UserManagementRoutingModule} from "./user-management-routing.module";
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [UsersComponent, UserManagementComponent, UserAddComponent, UserEditComponent],
  exports: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UserManagementRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserManagementModule {
}
