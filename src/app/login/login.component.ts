import { Component, inject, Injectable, OnInit,TemplateRef,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticateService } from '../layout/shared/services/authenticate.service';
import { AdminserviceService } from '../services/user-service/user-service.service'
import {  otpValidation } from '../model/Users/otpValidation'
import { User } from '../model/user';
import { ToastService } from "src/app/layout/shared/toast/toast.service";
import { HeaderFilterCellComp } from 'ag-grid-community';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [ToastService]
})
export class LoginComponent implements OnInit {
  @ViewChild('dangerTpl', { static: true }) dangerTpl!: TemplateRef<any>;
  msg: string = '';
  // user: any;
  userobj: User;
  Otpupdateobj:otpValidation;
  router = inject(Router)
  activityMsg: string = '';
  constructor(private service: AdminserviceService,public toastService: ToastService) { }
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
    next:(res :any)=>{
      console.log("Login response:", res); 
      localStorage.setItem('token',res.token)   
      this.activityMsg=" data saved successfully!";
      this.router.navigate(['home']);
    },
    error: err =>{
      if(err.status==400)
        this.toastService.show(this.dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
      else
      alert("hello")
      this.toastService.show(this.dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });    }

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

