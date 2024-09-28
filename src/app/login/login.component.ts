import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../layout/shared/services/authenticate.service';
import { AdminserviceService} from '../services/user-service/user-service.service'
import { login} from '../model/Users/Login'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // providers: [MyserviceService]
})
export class LoginComponent implements OnInit {
  msg: string = '';
  user: any;

  constructor(private service: AdminserviceService,private router: Router ) { }
  ngOnInit(): void {
   
  }
  check(uname: string, p: string) {
    let loginData = { username: uname, password: p };
    this.service.loginRequst(loginData).subscribe({
      next: (response) => {
        if (response == null) {
          this.msg = 'Invalid Username or Password';
          this.router.navigate(['/login']);
        } else {
          this.user = response.data;
          console.log('log::' + JSON.stringify(this.user));
          this.router.navigate(['/dashboard']);
        }
      },
      error: (e) => {
        this.msg = 'Invalid Username or Password';
        alert('Login error');
        this.router.navigate(['/login']);
        localStorage.clear();
      },
    });
  }
}

