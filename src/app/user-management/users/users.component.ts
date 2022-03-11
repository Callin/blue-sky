import {Component, Input, OnInit} from '@angular/core';
import {UserManagementService} from "../../core/services/user-management.service";
import {User} from "../../core/models/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  constructor(private userManagementService: UserManagementService) { }

  ngOnInit() {
    this.userManagementService.getAllUser().subscribe(
      result => {
        this.users = result;
        console.log("users=", this.users);
      }
    )
  }

  deleteUser(id: number) {
    console.log("Deleting user... not")
  }
}
