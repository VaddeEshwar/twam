import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminserviceService } from '../../../services/user-service/user-service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: AdminserviceService,private router: Router) { }

  canActivate( ) {
    if(this.service.IsLoggedIn()){
      return true;
    }else {
      this.router.navigate(['login'])
      return false;
    }
 
  }
  
}
