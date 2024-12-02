import { Component, inject, Injectable, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticateService } from '../layout/shared/services/authenticate.service';
import { AdminserviceService } from '../services/user-service/user-service.service'
import { otpValidation } from '../model/Users/otpValidation'
import { User } from '../model/user';
import { resetPassword } from  '../model/Users/resetpass'
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
  resetObj:resetPassword;
  Otpupdateobj: otpValidation;
  router = inject(Router)
  activityMsg: string = '';
  rememberMe: boolean = false;
  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash'
  constructor(private service: AdminserviceService, public toastService: ToastService) { }
  ngOnInit(): void {
    this.userobj = new User();
    this.Otpupdateobj = new otpValidation();
    this.resetObj = new resetPassword();
  }
  ///////////////loginRequst////////////
  onSubmit() {
    if (this.userobj.form.valid) {
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
    console.log("fromData::" + JSON.stringify(fromData));
    debugger
    this.service.loginRequst(fromData).subscribe({
      next: (response: any) => {
        debugger
        console.log("Login response:", response);
        localStorage.setItem('token', response.token)
           Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Login successful!',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        this.router.navigate(['home']);
      },
      error: err => {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Login failed!',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }

    })
  }
  ///////////////loginRequst////////////
  onRecoverSubmit() {

    const fromData = this.resetObj.form.value;
    console.log("fromData::" + JSON.stringify(fromData));

    this.service.OtpValidation(fromData).subscribe({
      next: (data) => {
        this.activityMsg = " data saved successfully!";
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
  hideShowpass() {
    this.isText = !this.isText;
    this.eyeIcon = this.isText ? "fa-eye" : "fa-eye-slash";
    this.type = this.isText ? "text" : "password";
  }
}

