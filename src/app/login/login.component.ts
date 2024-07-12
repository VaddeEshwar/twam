import { Component, Injectable, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
// import { MyserviceService } from '././../myservice.service';
import { AuthenticateService } from '../layout/shared/services/authenticate.service';

import { User} from '../model/user'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // providers: [MyserviceService]
})
export class LoginComponent implements OnInit {
  msg = '';
  submitted = false;
  users?: User[];
  user?: User;
  clientId:number;
  constructor(private service: AuthenticateService, private routes: Router) { }

  loginform = true;
  recoverform = false;
  ngOnInit(): void {
    localStorage.clear();
  }
  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
  // retrieveUsers(): void {
  //   this.service.getAll()
  //     .subscribe({
  //       next: (data) => {
  //         this.users = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }
  // retrieveUsersAuthentication(user:User): void {
  //   this.service.findByAuth(user)
  //     .subscribe({
  //       next: (data) => {
  //         this.user = data;
  //         console.log(data);
  //         localStorage.clear();
          
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }
  // check(uname: string, p: string) {
  //   let user=new User();
  //   user.username=uname;
  //   user.password=p;
  //   this.service.findByAuth(user).subscribe({next: (response) => {
  //       if(response == null) {
  //         this.msg = 'Invalid Username or Password null'; 
  //         this.routes.navigate(['/login']);
  //       } else {
  //         this.user = response.data;
  //       console.log("log::"+JSON.stringify(this.user))
  //         this.routes.navigate(['/dashboard']);
        
  //       }
  //     },
  //     error: (e) => {this.msg = 'Invalid Username or Password error'; 
  //     alert("error");  
  //       this.routes.navigate(['/login']);
  //       localStorage.clear();
  //    }
  //   });
  // }

 


  
}
