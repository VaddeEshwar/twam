import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [FormsModule, TranslateModule, CommonModule,LoginRoutingModule, ReactiveFormsModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
