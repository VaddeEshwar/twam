import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AdminserviceService } from '../../../services/user-service/user-service.service'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: AdminserviceService,private router: Router) { }

  // canActivate(route:ActivatedRouteSnapshot,
  //   state:RouterStateSnapshot):Observable<boolean | UrlTree > |Promise <boolean | UrlTree> | boolean | UrlTree {
  //   if (this.service.IsLoggedIn()){
  //     return true;
  //   }else
  //   alert('hello eshwar please Login after do u r work ')
  //   this.router.navigate(['login'])
  //    return false;
  //   }

  canActivate(): boolean {
    const isAuthenticated = this.checkAuthentication();
    if (!isAuthenticated) {
      this.router.navigate(['/login']); 
      return false;
    }
    return true;
  }

  private checkAuthentication(): boolean {
    debugger;
    const token = localStorage.getItem('token'); 
    return !!token;
  }
  private loggedIn: boolean = false;

 

  login(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
  }

   isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return this.loggedIn;
  }

  isFirstTimeLogin(): boolean {
    const firstTime = localStorage.getItem('firstTime');
    return firstTime === null; 
  }

  setFirstTimeLogin(): void {
    localStorage.setItem('firstTime', 'false');
  }


  private isRegistered = false; 


  setRegistered(status: boolean) {
    this.isRegistered = status;
  }

  getRegistered(): boolean {
    return this.isRegistered;
  }
}
