import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UsersComponent} from "./user-management/users/users.component";

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {
    path: "user-mgmt",
    loadChildren: "./user-management/user-management.module#UserManagementModule"
  },
  {path: "**", redirectTo: "dashboard"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
