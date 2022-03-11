import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {UserEditComponent} from "./user-edit/user-edit.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {UsersComponent} from "./users/users.component";
import {UserManagementComponent} from "./user-management.component";

const routes: Routes = [
  {path: '', component: UserManagementComponent, children:[
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', component: UsersComponent},
      {path: 'user-add', component: UserAddComponent},
      {path: 'user-edit/:id', component: UserEditComponent}
    ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class UserManagementRoutingModule { }