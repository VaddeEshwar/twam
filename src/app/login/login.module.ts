import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
  imports: [FormsModule, TranslateModule, CommonModule,LoginRoutingModule, ReactiveFormsModule,SweetAlert2Module.forRoot()],
  declarations: [LoginComponent]
})
export class LoginModule {}
