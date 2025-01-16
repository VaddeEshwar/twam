/////////User-Services-Component///////////////////////////
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

import { tap } from 'rxjs/operators';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
//////////////////model//////////////////////////////////////
import { Address } from '../../model/Address/address';
import { AddressMap } from '../../model/Address/UserAddressMap'
import { Registration } from '../../model/Users/registration';
import { otpValidation } from '../../model/Users/otpValidation';
import { UpdateuserRequest } from '../../model/Users/UpdateuserRequest';
import { Country } from '../../model/Common/Countries';
import { City } from '../../model/Common/Cities';
import { states } from '../../model/Common/states';
import { Emailactivity } from '../../model/Users/emailuserid';
import { User } from '../../model/user'
import { resetPassword } from '../../model/Users/resetpass'
import { Getping } from '../../model/Users/Getping';
import { RefreshToken } from '../../model/authentication/refresh';
import { AuthGuard } from '../../layout/shared/services/auth.guard'
const backEndUrl = environment.backEndUrl;

/////////////////////////Common///////////////////////////////
const baseUrlForGetCountries = backEndUrl + "/Common/GetCountries";  //////Get-method
const baseUrlForGetCities = backEndUrl + "/Common/GetCities";  //////Get-method
const baseUrlForGetStates = backEndUrl + "/Common/GetStates"; //////post-method
const baseUrlForGetRoles = backEndUrl + "/Common/GetRoles"; //////Get-method
/////////////////////User-Method/////////////////////////////////////
const baseUrlForRegister = backEndUrl + "/User/register"; //////post-method
const baseUrlForLogin = backEndUrl + "/User/login"; //////post-method
const baseUrlForUserverify = backEndUrl + "/User/verify"; //////Get-method
const baseUrlForupdateuserdetails = backEndUrl + "/User/updateuserdetails"; //////Put-method
const baseUrlForGetping = backEndUrl + "/User/Getping"; //////Get-method
const baseUrlForGetDbsuccess = backEndUrl + "/User/GetDbsuccess"; //////Get-method
////////////////////Address/////////////////////////////
const baseUrlForAddress = backEndUrl + "/Address/addAddress"; //////post-method
const baseUrlForUserAddressMap = backEndUrl + "/Address/UserAddressMap"; //////post-method
////////////////////Authentication/////////////////
const baseUrlForAuthenticationrefresh = backEndUrl + "/Auth/refresh"; //////post-method
const baseUrlForAuthenticationrefresh_token = backEndUrl + "/Auth/refresh-token"; /////Get-method
const baseUrlForGetUserIdFromRefreshTokenAsync = backEndUrl + "/Auth/GetUserIdFromRefreshTokenAsync"; //////post-method
/////////////////////Password/////////////////////////////////////
const baseUrlForchangepassword = backEndUrl + "/Password/change-password"; //////post-method
const baseUrlForgeneratepassword = backEndUrl + "/Password/generate"; //////post-method
// const baseUrlForUseractivityEmailHistory = backEndUrl + "/Useractivity/insertEmailHistory";
const baseUrlForGetEmailHistorybyUserId = backEndUrl + "/Useractivity/GetEmailHistorybyUserId";//////post-method
const baseUrlForgetUserActivities = backEndUrl + "/Useractivity/getUserActivities";//////post-method
// const baseUrlForInsertUserActivity = backEndUrl + "/Useractivity/InsertUserActivity";//////post-method

const expiryDate = new Date();
expiryDate.setHours(expiryDate.getHours() + 1);
const expiryDateString = expiryDate.toISOString();
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2',
  'ARRAffinity': '79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5',
  'ARRAffinitySameSite': '79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5',
  'userGUID': 'C02CC54C-EDFF-43CC-B3FD-B153E0B42FD7',
  // 'refreshToken': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQzhCQzJDREYtQTE5RC00RUQxLUEzMEItNEZFQjJBNTA0NjBFIiwiZXhwIjoxNzI4MDUxMjM4LCJpc3MiOiJodHRwczovL3JuZHRlY2hpZXNzZXJ2aWNlcy1nbWUzYmhnY2IzYnNhOGN6LnNvdXRoaW5kaWEtMDEuYXp1cmV3ZWJzaXRlcy5uZXQvIiwiYXVkIjoiaHR0cHM6Ly9ybmR0ZWNoaWVzc2VydmljZXMtZ21lM2JoZ2NiM2JzYThjei5zb3V0aGluZGlhLTAxLmF6dXJld2Vic2l0ZXMubmV0LyJ9.unjnfZK9K3wvXD_7t_2lA4zox2zf27FCcXx4geFxr4M`,
  "expiryDate": expiryDateString
});

@Injectable({
  providedIn: 'root'
})
///////raki2830@gmail.com pass:rnarra
export class AdminserviceService { 
  private readonly tokenKey = 'tokenKey';
  private loggedUser?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private router = inject(Router);
  private http = inject(HttpClient);
  constructor() { }
  refreshToken(data:RefreshToken) {
   const url = `${baseUrlForAuthenticationrefresh}`;
    return this.http.post<any>(url, data, { headers });
  }
  getRefreshToken(): Observable<any> {
    return this.http.get<any>(baseUrlForAuthenticationrefresh_token, { headers });
  }
  // private storeJwtToken(jwt: string) {
  //   localStorage.setItem(this.tokenKey, jwt);
  // }
  postFromRefreshToken(): Observable<any> {
    let token: any = localStorage.getItem(this.tokenKey);
    if (!token) return of(null);
    token = JSON.parse(token);  
    let refreshToken = token.refreshToken;
    return this.http.post<any>(baseUrlForGetUserIdFromRefreshTokenAsync, { refreshToken }, { headers }) 
    .pipe(tap((tokens: any) => this.storeJwtToken(JSON.stringify(tokens))));
  }

  // baseUrlForGetUserIdFromRefreshTokenAsync

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
  //////////////////////////// User verfication/////////////////////////////////
  getUserVerfy(): Observable<any> {
    return this.http.get<any>(baseUrlForUserverify, { headers }).pipe(
      tap(response => {
        if (response && response.roles) {
          localStorage.setItem('userRoles', JSON.stringify(response.roles));
        }
      })
    );
  }
  ////////////////////////////GetRoles /////////////////////////////////

  getUserRoles(): Observable<any> {
    return this.http.get<any>(baseUrlForGetRoles, { headers })
      .pipe(
        tap(response => {
          if (response && response.roles) {
            localStorage.setItem('userRoles', JSON.stringify(response.roles));
          }
        })
      );
  }
  hasRole(role: string): boolean {
    const roles = JSON.parse(localStorage.getItem('userRoles') || '[]');
    return roles.includes(role);
  }
  clearRoles(): void {
    localStorage.removeItem('userRoles');
  }
  //////////////////////////HttpErrorResponse//////////////////////////////////
  // Getping(dateTime: string): Observable<Getping[]> {

  //   const url = `${baseUrlForGetping}`;
  //   return this.http.get<any>(url, { params: { dateTime } });
  // }
  getPing(dateTime: string): Observable<any> {
    const url = `${baseUrlForGetping}`;
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      Authorization: `Bearer {token}`,
    });
    return this.http.get<any>(url, { headers, params: { dateTime } });
  }
  //////////////////////////////////User/GetDbsuccess
  GetDbsuccess(): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
        console.error('No token found in localStorage');
        return throwError('No token provided');
    }
    const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
    });

    return this.http.get<any>(baseUrlForGetDbsuccess, { headers }).pipe(
        tap((data) => console.log('API response:', data)),
        catchError((error) => {
            console.error('Error occurred:', error);
            return throwError(error);
        })
    );
}


  getAllCountries(): Observable<any> {
    return this.http.get<any>(baseUrlForGetCountries, { headers }).pipe(
      tap((data) => console.log('API response:', data)),
      catchError(this.handleError)
    );
  }
  getStates(statesObj:states): Observable<any>{
    // debugger
    return this.http.post<any>(baseUrlForGetStates,statesObj,{headers}).pipe(
      tap((data) => console.log('API response:', data)),
      catchError(this.handleError)
    );
  }
  // getAllCity(stateID: number): Observable<City[]> {
  //   const headers = { 'Content-Type': 'application/json', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2' };
  //   console.log('API response:', stateID)
  //   return this.http.get<City[]>(this.baseUrlForGetCities, { 'headers': headers}).pipe(
  //     tap((data) => console.log('API response:', data)),
  //     catchError(this.handleError)
  //   );
  // }
  getAllCity(stateId: number): Observable<any> {
    // const state_Id = stateId+"";
    // const params = { 'stateId': state_Id }
    console.log("###Before API CALL####");
    console.log(stateId)
    console.log("stateId::" + stateId);
    return this.http.get<City[]>(baseUrlForGetCities, { headers }).pipe(
      tap((data) => console.log('API response:', data)),
      catchError(this.handleError)
    );
  }
  saveEmailSetting(emailSetting: Emailactivity): Observable<Emailactivity> {
    console.log("###Before API CALL####");
    console.log(emailSetting);
    console.log("###After API CALL####");
    return this.http.post<Emailactivity>(baseUrlForGetEmailHistorybyUserId, JSON.stringify(Registration), { headers })
  }
  ///////////////////////Address/////////////////////
  SaveAddress(addressmoduleobj: Address) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'true' };
    return this.http.post<Address>(baseUrlForAddress, addressmoduleobj, { 'headers': headers })
  }
  saveUserAddressMap(UserAddressMapobj: AddressMap) {
    return this.http.post<Address>(baseUrlForUserAddressMap, UserAddressMapobj, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  //////////////////////////////Registration//////////////////////////////////////// 
  saveregistration(UserRegistrationobj: Registration): Observable<Registration> {
    console.log("User Registration object:", UserRegistrationobj);
    return this.http.post<Registration>(baseUrlForRegister, UserRegistrationobj, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  //////////////////////////////login//////////////////////////////////////// 
  // loginRequst(userobj: User): Observable<User> {
  //   console.log("User login object:", userobj);
  //   debugger
  //   return this.http.post(baseUrlForLogin, userobj, { headers }).pipe(tap((tokenKey: any) => 
  //   this.doLoginUser(JSON.stringify(tokenKey))));
  // }
  loginRequst(userobj: User): Observable<User> {
    console.log("User login object:", userobj);
    debugger
    return this.http.post(baseUrlForLogin, userobj, { headers }).pipe(
      tap((response: any) => this.doLoginUser(JSON.stringify(userobj), response.token))
    );
  }
  private doLoginUser(userobj: string, token: any) {
    this.loggedUser = userobj;
    this.storeJwtToken(token);
    this.isAuthenticatedSubject.next(true);
  }
  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.tokenKey, jwt);
  }
  GetToken(): string {
    return localStorage.getItem('authToken') || '';
  }
  Logedout() {
    localStorage.clear();
    this.router.navigateByUrl('home')
  }
  //////////////////////////////OtpValidation////////////////////////////////////////  
  resetPassword(UserresetPasswordobj: resetPassword) {
    console.log("hello");
    return this.http.post<resetPassword>(baseUrlForchangepassword, UserresetPasswordobj, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  //////////////////////////////OtpValidation////////////////////////////////////////  

  // OtpValidation(UserOtpValidationobj: otpValidation) {
  //   console.log("hello");
  //   return this.http.post<otpValidation>(baseUrlForchangepassword, UserOtpValidationobj, { headers })
  // }


  /////////////////////////////////user update address///////////////////////////////
  SaveupdateAdd(userupdateaddressobj: any) {
    return this.http.put<UpdateuserRequest>(baseUrlForupdateuserdetails, JSON.stringify(userupdateaddressobj), { headers })
  }
  /////////////////////////////////Useractivity///////////////////////////////

}
