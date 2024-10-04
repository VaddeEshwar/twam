import { Component, inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticateService } from '../layout/shared/services/authenticate.service';
import { AdminserviceService } from '../services/user-service/user-service.service'
// import { login } from '../model/Users/Login'
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
  responsedata: any;
  router = inject(Router)

  constructor(private service: AdminserviceService) { }
  ngOnInit(): void {
    this.userobj = new User();
  }
  // check(uname: string, p: string) {
  //   let loginData = { username: uname, password: p };
  //   this.service.loginRequst(loginData).subscribe({
  //     next: (response) => {
  //       if (response == null) {
  //         this.msg = 'Invalid Username or Password';
  //         this.router.navigate(['/login']);
  //       } else {
  //         this.user = response.data;
  //         console.log('log::' + JSON.stringify(this.user));
  //         this.router.navigate(['/dashboard']);
  //       }
  //     },
  //     error: (e) => {
  //       this.msg = 'Invalid Username or Password';
  //       alert('Login error');
  //       this.router.navigate(['/login']);
  //       localStorage.clear();
  //     },
  //   });
  // }

  onSubmit() {
    debugger
    this.service.loginRequst(this.userobj).subscribe((res: any) => {
      if (res.result) {
        this.responsedata = res;
        localStorage.setItem('angular', this.responsedata.jwtToken);
        this.router.navigateByUrl('home')
      } else {
        alert(res.message)
      }

    }, error => {
      alert("eswar")
    })
  }

}

