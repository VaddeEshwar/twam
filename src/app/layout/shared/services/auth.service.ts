import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { RefreshToken} from '../../../model/authentication/refresh'
import { RefreshTokenRequest} from '../../../model/authentication/refresh-token-reqest';
import {AdminserviceService} from '../../../services/user-service/user-service.service'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isToken: any;

  constructor(private router:Router,private tokenService:AdminserviceService) { }

  isLoggedIn(){
    return !!this.getAccessToken() && !this.isTokenExpired()
  }

  addUsername(username:string){
    localStorage.setItem('username',username);
  }

  addAccessToken(accessToken:string){
    localStorage.setItem('accessToken',accessToken);
  }


  addRefreshToken(refToken:string){
    localStorage.setItem('refreshToken',refToken);
  }

  getAccessToken(){
    return localStorage.getItem('accessToken');
  }

  getUsername(){
    return localStorage.getItem('username');
  }

  getRefreshToken(){
    return localStorage.getItem('refreshToken');
  }

  // check expiration of our token
  isTokenExpired(){
    const token: string=this.getAccessToken()??"";
        if(!token)
          return false;
        const tokenSplit:string=token.split('.')[1];
        const decodedString:string=atob(tokenSplit);
        const jsonString=JSON.parse(decodedString);
        const expiry = (jsonString).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;

  }
  
  logout(){
     localStorage.removeItem("username");
     localStorage.removeItem("accessToken");
     localStorage.removeItem("refreshToken");
     this.router.navigate(['/login']);
  }

  getUserRole(){
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.getAccessToken()??"");
    console.log(decodedToken);
    if(decodedToken){
    const role = decodedToken['https://rndtechiesservices-gme3bhgcb3bsa8cz.southindia-01.azurewebsites.net/gateway/api/Common/GetRoles'];
    return role; 
    }
    return "";
  }

  // refreshing the access token
  async refreshingToken():Promise<boolean>{
    const token = this.getAccessToken();
    const refreshToken = this.getRefreshToken();
    if(!token || !refreshToken){
       return false;
    }
    let success!:boolean;
    const data:RefreshToken={userGUID:String(token),refreshToken:String(refreshToken),expiryDate:new Date()};

    this.tokenService.refreshToken(data).subscribe({
       next: (response)=>{
          this.addAccessToken(response.accessToken);
          this.addRefreshToken(response.refreshToken);
       },
       error: (error)=>{
        console.log(error);
        success=false;
       }
    });
    return success;
  }

}
