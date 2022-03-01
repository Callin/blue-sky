import {Component, Input, OnInit} from '@angular/core';
import {UserManagementService} from "../../core/services/user-management.service";
import {User} from "../../core/models/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() users: User[];
  constructor() { }

  ngOnInit() {
  }
}
