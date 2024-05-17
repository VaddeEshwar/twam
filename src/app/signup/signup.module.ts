import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
  imports: [FormsModule, TranslateModule, CommonModule,SignupRoutingModule, ReactiveFormsModule],
  declarations: [SignupComponent]
})
export class SignupModule {}
