import { Component, inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticateService } from '../layout/shared/services/authenticate.service';
import { AdminserviceService } from '../services/user-service/user-service.service'
import {  otpValidation } from '../model/Users/otpValidation'
import { User } from '../model/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // providers: [MyserviceService]
})
export class LoginComponent implements OnInit {
  msg: string = '';
  // user: any;
  userobj: User;
  Otpupdateobj:otpValidation;
  router = inject(Router)
  activityMsg: string = '';
  constructor(private service: AdminserviceService) { }
  ngOnInit(): void {
    this.userobj = new User();
    this.Otpupdateobj = new otpValidation();
  }
 ///////////////loginRequst////////////
  onSubmit() {
   const fromData = this.userobj.form.value;
   console.log("fromData::"+JSON.stringify(fromData));
   debugger
   this.service.loginRequst(fromData).subscribe({
    next:(data)=>{
      this.activityMsg=" data saved successfully!";
      this.router.navigate(['home']);
    }
   })
  }
   ///////////////loginRequst////////////
   onRecoverSubmit() {
    debugger
    const fromData = this.Otpupdateobj.form.value;
    console.log("fromData::"+JSON.stringify(fromData));
    debugger
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
}

