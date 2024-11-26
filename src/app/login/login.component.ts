import { Component, inject, Injectable, OnInit,TemplateRef,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticateService } from '../layout/shared/services/authenticate.service';
import { AdminserviceService } from '../services/user-service/user-service.service'
import {  otpValidation } from '../model/Users/otpValidation'
import { User } from '../model/user';
import { ToastService } from "src/app/layout/shared/toast/toast.service";
import { HeaderFilterCellComp } from 'ag-grid-community';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent implements OnInit {
  @ViewChild('dangerTpl', { static: true }) dangerTpl!: TemplateRef<any>;
  msg: string = '';
  // user: any;
  userobj: User;
  Otpupdateobj:otpValidation;
  router = inject(Router)
  activityMsg: string = '';
  rememberMe: boolean = false;
  constructor(private service: AdminserviceService,public toastService: ToastService) { }
  ngOnInit(): void {
    this.userobj = new User();
    this.Otpupdateobj = new otpValidation();
  }
 ///////////////loginRequst////////////
 onSubmit() {
  if (this.userobj.form.invalid) {
    console.log("Form is invalid:", this.userobj.form.errors);
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: 'Please fill in all required fields.',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    return;
  }

  const fromData = this.userobj.form.value;
  console.log("Form data:", JSON.stringify(fromData));

  this.service.loginRequst(fromData).subscribe({
    next: (response: any) => {
      console.log("Login response:", response);
      if (response.isSuccess) {
        debugger
        localStorage.setItem('token', response.token);  
        this.activityMsg = "Login saved successfully!";
        console.log('token', response.token)
        this.router.navigate(['home']);
      } else {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Login failed. Please try again.',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    },
    error: err => {
      console.error('Login error:', err);
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: 'An error occurred. Please try again.',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }
  });
}
   ///////////////loginRequst////////////
   onRecoverSubmit() {
  
    const fromData = this.Otpupdateobj.form.value;
    console.log("fromData::"+JSON.stringify(fromData));
    
    this.service.OtpValidation(fromData).subscribe({
     next:(data)=>{
       this.activityMsg=" data saved successfully!";
       this.router.navigate(['login']);
     }
    })
   }
  ////////////recoverform////////////////
  recoverform = false;
  showRecoverForm() {
    this.recoverform = !this.recoverform;
  }

  fieldTextType: boolean;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}

