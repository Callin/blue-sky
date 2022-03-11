import { Component, OnInit } from '@angular/core';
import {UserManagementService} from "../core/services/user-management.service";
import {User} from "../core/models/user.model";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  users: User[];
  constructor(private userManagementService: UserManagementService) { }

  ngOnInit() {
    this.userManagementService
      .getAllUser()
      .subscribe(
        response => this.users = response,
          error => console.log("loool=", error)
      );
    console.log("users=", this.users)
  }


}
