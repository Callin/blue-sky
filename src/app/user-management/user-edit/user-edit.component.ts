import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserManagementService} from "../../core/services/user-management.service";
import {User} from "../../core/models/user.model";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user: User;
  editUserForms: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private userManagementService: UserManagementService) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log("id=", id);
    this.editUserForms = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", [Validators.required, Validators.email]]
    });

    this.userManagementService.getUser(id).subscribe(result => {
      console.log("Result=", result);
      this.user = result;
      if (result) {
        this.editUserForms.get('name').setValue(result.name);
        this.editUserForms.get('email').setValue(result.email);
      }
    })
  }

  editUser() {
    let requestBody = this.editUserForms.value;
    requestBody.id = this.user.id;
    this.userManagementService.editUser(this.editUserForms.value).subscribe(
      result => console.log("Result=", result))
  }

  get name() {
    return this.editUserForms.get('name');
  }

  get email() {
    return this.editUserForms.get('email');
  }

  goBack() {
    this.router.navigateByUrl("user-mgmt/users");
  }


}
