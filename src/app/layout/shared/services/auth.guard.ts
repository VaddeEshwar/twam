import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    if (this.authService.isLoggedIn())
      return true;
    else{
      // move to the login page
      // if our refresh token expires,then it will refresh the token
      const isRefreshed=  await this.authService.refreshingToken();
        if(!isRefreshed){
          this.router.navigate(['/login']);
        }

        return isRefreshed;
    }
  }
  
  constructor(private authService:AuthService,private router:Router) {
    
  }

  private loggedIn = false;
  private firstTimeLogin = true;

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  isFirstTimeLogin(): boolean {
    return this.firstTimeLogin;
  }

  setFirstTimeLogin(): void {
    this.firstTimeLogin = false;
  }
  isTokenExpired(){
    return this.authService.isToken
  }
}
