import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [HeaderComponent],
    exports: [
        HeaderComponent
    ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    RouterModule
  ]
})
export class SharedModule { }
