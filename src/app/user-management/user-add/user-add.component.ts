import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserManagementService} from "../../core/services/user-management.service";
import {logger} from "codelyzer/util/logger";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  addUserForms: FormGroup;

  constructor(private router: Router,
              private userManagementService: UserManagementService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.addUserForms = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", [Validators.required, Validators.email]]
    });
  }

  addUser() {
    this.userManagementService.addUser(this.addUserForms.value).subscribe(
      result => console.log("Result=", result))
  }

  get name() {
    return this.addUserForms.get('name');
  }

  get email() {
    return this.addUserForms.get('email');
  }

  goBack() {
    this.router.navigateByUrl("user-mgmt/users");
  }

}
