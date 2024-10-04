/////////User-Services-Component///////////////////////////
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { tap } from 'rxjs/operators';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//////////////////model//////////////////////////////////////
import { Address } from '../../model/Address/address';
import { AddressMap } from '../../model/Address/UserAddressMap'
import { Registration } from '../../model/Users/registration';
import { otpValidation } from '../../model/Users/otpValidation';
import { UpdateuserRequest } from '../../model/Users/UpdateuserRequest';
import { Country } from '../../model/Common/Countries';
import { Emailactivity } from '../../model/Users/emailuserid';
import { User } from '../../model/user'
//////////////////model//////////////////////////////////////
@Injectable({
  providedIn: 'root'
})

export class AdminserviceService {
  private backendURL = environment.backEndUrl;

/////////////////////////Common///////////////////////////////
private baseUrlForGetCountries = this.backendURL + "/Common/GetCountries";  //////Get-method
private baseUrlForGetCities =this.backendURL + "/Common/GetCities";  //////Get-method
private baseUrlForGetStates =this.backendURL + "/Common/GetStates"; //////post-method
private baseUrlForGetRoles =this.backendURL + "/Common/GetRoles"; //////Get-method
/////////////////////User-Method/////////////////////////////////////
private baseUrlForRegister =this.backendURL + "/User/register"; //////post-method
private baseUrlForLogin = this.backendURL + "/User/login"; //////post-method
private baseUrlForUserverify = this.backendURL + "/User/verify"; //////Get-method
private baseUrlForupdateuserdetails = this.backendURL + "/User/updateuserdetails"; //////Put-method
private baseUrlForGetping = this.backendURL + "/User/Getping"; //////Get-method
private baseUrlForGetDbsuccess = this.backendURL + "/User/GetDbsuccess"; //////Get-method
private baseUrlForOtpValidation = this.backendURL + "/User/OtpValidation"; //////Get-method
////////////////////Address/////////////////////////////
private baseUrlForAddress = this.backendURL + "/Address/addAddress"; //////post-method
private baseUrlForUserAddressMap = this.backendURL + "/Address/UserAddressMap"; //////post-method
////////////////////Authentication/////////////////
private baseUrlForAuthenticationrefresh = this.backendURL + "/Auth/refresh"; //////post-method
private baseUrlForAuthenticationrefresh_token = this.backendURL + "/Auth/refresh-token"; /////Get-method
private baseUrlForGetUserIdFromRefreshTokenAsync = this.backendURL + "/Auth/GetUserIdFromRefreshTokenAsync"; //////post-method
/////////////////////Password/////////////////////////////////////
private baseUrlForchangepassword = this.backendURL + "/Password/change-password"; //////post-method
private baseUrlForgeneratepassword = this.backendURL + "/Password/generate"; //////post-method
// const baseUrlForUseractivityEmailHistory = backendURL + "/Useractivity/insertEmailHistory";
private baseUrlForGetEmailHistorybyUserId = this.backendURL + "/Useractivity/GetEmailHistorybyUserId";//////post-method
private baseUrlForgetUserActivities = this.backendURL + "/Useractivity/getUserActivities";//////post-method
// const baseUrlForInsertUserActivity = backendURL + "/Useractivity/InsertUserActivity";//////post-method

  refreshToken(userGUID: string, refreshToken: string, expiryDate: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2',
        
      })
    };
    const body = {
      userGUID: userGUID,
      refreshToken: refreshToken,
      expiryDate: expiryDate
    };
    debugger
    return this.http.post<any>(this.baseUrlForAuthenticationrefresh, body,  httpOptions );
  }
  constructor(private http: HttpClient, private router: Router) { }
 
  //////////////////////////HttpErrorResponse//////////////////////////////////
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
  ////////////////////////////GetRoles /////////////////////////////////
  getUserRoles(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2',
    });
   
    return this.http.get<any>(this.baseUrlForGetRoles, { headers })
      .pipe(
        tap(response => {
          // Save roles to localStorage for later use
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
  getAllCountries(): Observable<Country[]> {
    debugger
    console.log("###Before API CALL####");
    console.log(Country)
    console.log("Country::" + Country);
    return this.http.get<[Country]>(this.baseUrlForGetCountries).pipe(
      catchError(this.handleError)
    );
  }
  getAllCity() {
    return this.http.get(this.baseUrlForGetCities)
  }

  saveEmailSetting(emailSetting: Emailactivity): Observable<Emailactivity> {
    const headers = {
      'Content-Type': 'application/json',
      'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2'
    };
    console.log("###Before API CALL####");
    console.log(emailSetting);
    console.log("###After API CALL####");
    return this.http.post<Emailactivity>(this.baseUrlForGetEmailHistorybyUserId, JSON.stringify(Registration), { headers: headers })
  }
  ///////////////////////Address/////////////////////
  SaveAddress(addressmoduleobj: Address) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'true' };
    console.log("hello");
    return this.http.post<Address>(this.baseUrlForAddress, addressmoduleobj, { 'headers': headers })
  }
  saveUserAddressMap(UserAddressMapobj: AddressMap) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'true' };
    console.log("hello");
    return this.http.post<Address>(this.baseUrlForUserAddressMap, UserAddressMapobj, { 'headers': headers }).pipe(
      catchError(this.handleError)
    );
  }

  //////////////////////////////Registration//////////////////////////////////////// 
  saveregistration(UserRegistrationobj: Registration): Observable<Registration> {
    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2', };
    console.log("Eshwar hello");
    console.log("User Registration object:", UserRegistrationobj);
    debugger
    return this.http.post<Registration>(this.baseUrlForRegister, UserRegistrationobj, { headers: headers }).pipe(
     
      catchError(this.handleError)
    );
  }
  //////////////////////////////login//////////////////////////////////////// 
  loginRequst(userobj: User): Observable<User> {
    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2', };
    console.log("User login object:", userobj);
    debugger
    return this.http.post(this.baseUrlForLogin, userobj, { headers: headers }).pipe(
      map((response: any) => {
        const user = new User();
        user.populateFormData(response.data);
        return user;
      })
    );
  }
  IsLoggedIn() {
    return localStorage.getItem('token') != null
  }
  GetToken() {
    debugger
    return localStorage.getItem('token') || ''
  }
  Logedout(){
    localStorage.clear();
    this.router.navigateByUrl('home')
  }
  //////////////////////////////OtpValidation////////////////////////////////////////  
  OtpValidation(UserOtpValidationobj: otpValidation) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2', }
    console.log("hello");
    return this.http.post<otpValidation>(this.baseUrlForOtpValidation, UserOtpValidationobj, { 'headers': headers })
  }
  //////////////////////////////////////////User verifaction///////////////////////////
  Getuserverifaction(guid: string) {
    let gu_id = guid + "";
    let params: URLSearchParams = new URLSearchParams();
    const httpOptions = {
      headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2', },
      params: { 'guid': gu_id }
    };
    return this.http.get<[]>(this.baseUrlForUserverify, httpOptions);
  }
  /////////////////////////////////user update address///////////////////////////////
  SaveupdateAdd(userupdateaddressobj: any) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2', }
    return this.http.put<UpdateuserRequest>(this.baseUrlForupdateuserdetails, JSON.stringify(userupdateaddressobj), { 'headers': headers })
  }
  /////////////////////////////////Useractivity///////////////////////////////

}
