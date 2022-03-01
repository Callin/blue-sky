import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserManagementModule} from "./user-management/user-management.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DashboardModule} from "./dashboard/dashboard.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    UserManagementModule,
    DashboardModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
