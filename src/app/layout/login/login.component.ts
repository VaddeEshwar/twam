import { Component, Injectable, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
// import { MyserviceService } from '././../myservice.service';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // providers: [MyserviceService]
})
export class LoginComponent implements OnInit {

  submitted = false;
 
  constructor() { }

  ngOnInit(): void {
   

  }
 
  reloadPage() {
    window.location.reload();
  }
 


  
}
