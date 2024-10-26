/////////User-Services-Component///////////////////////////
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

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
import { Emailactivity } from '../../model/Users/emailuserid';
import { User } from '../../model/user'
import { Getping } from '../../model/Users/Getping';
import { RefreshPayload } from '../../model/authentication/refresh';
//////////////////model//////////////////////////////////////
@Injectable({
  providedIn: 'root'
})

export class AdminserviceService {
  private backendURL = environment.backEndUrl;

  /////////////////////////Common///////////////////////////////
  private baseUrlForGetCountries = this.backendURL + "/Common/GetCountries";  //////Get-method
  private baseUrlForGetCities = this.backendURL + "/Common/GetCities";  //////Get-method
  private baseUrlForGetStates = this.backendURL + "/Common/GetStates"; //////post-method
  private baseUrlForGetRoles = this.backendURL + "/Common/GetRoles"; //////Get-method
  /////////////////////User-Method/////////////////////////////////////
  private baseUrlForRegister = this.backendURL + "/User/register"; //////post-method
  private baseUrlForLogin = this.backendURL + "/User/login"; //////post-method
  private baseUrlForUserverify = this.backendURL + "/User/verify"; //////Get-method
  private baseUrlForupdateuserdetails = this.backendURL + "/User/updateuserdetails"; //////Put-method
  private baseUrlForGetping = this.backendURL + "/User/Getping"; //////Get-method
  private baseUrlForGetDbsuccess = this.backendURL + "/User/GetDbsuccess"; //////Get-method

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

  // refreshToken(userGUID: string, refreshToken: string, expiryDate: string): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2',

  //     })
  //   };
  //   const body = {
  //     userGUID: userGUID,
  //     refreshToken: refreshToken,
  //     expiryDate: expiryDate
  //   };

  //   return this.http.post<any>(this.baseUrlForAuthenticationrefresh, body, httpOptions);
  // }

  refreshToken(payload: RefreshPayload ): Observable<any> {
    const url = `${this.baseUrlForAuthenticationrefresh}/api/Auth/refresh`;
    return this.http.post<any>(url, payload);
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
  Getping(dateTime: string): Observable<Getping[]> {
    const token = localStorage.getItem('authToken');
    const headers = { 'Content-Type': 'application/json', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2', 'ARRAffinity': '79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5', 'ARRAffinitySameSite': '79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5','Authorization': `Bearer ${token}` };
    const params = new HttpParams().set('dateTime', dateTime);
    return this.http.get<Getping[]>(this.baseUrlForGetping, { 'headers': headers, params }).pipe(
      catchError(this.handleError)
    );
  }

  //////////////////////////////////User/GetDbsuccess
  GetDbsuccess(): Observable<any> {
    debugger
    const headers = { 'Content-Type': 'application/json', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2', 'ARRAffinity': '79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5', 'ARRAffinitySameSite': '79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5' };
    const token = localStorage.getItem('authToken');
   
    return this.http.get<any>(this.baseUrlForGetDbsuccess, { 'headers': headers }).pipe(
      tap((data) => console.log('API response:', data)),
      catchError(this.handleError)
    );
  }

  getAllCountries(): Observable<any> {
    const headers = { 'Content-Type': 'application/json', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2', 'ARRAffinity': '79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5', 'ARRAffinitySameSite': '79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5' };
    return this.http.get<any>(this.baseUrlForGetCountries, { 'headers': headers }).pipe(
      tap((data) => console.log('API response:', data)),
      catchError(this.handleError)
    );
  }
  // getAllCity(stateID: number): Observable<City[]> {
  //   debugger
  //   const headers = { 'Content-Type': 'application/json', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2' };
  //   console.log('API response:', stateID)
  //   return this.http.get<City[]>(this.baseUrlForGetCities, { 'headers': headers}).pipe(
  //     tap((data) => console.log('API response:', data)),
  //     catchError(this.handleError)
  //   );
  // }
  getAllCity(stateId: number): Observable<any> {
    // const state_Id = stateId+"";
    const headers = { 'Content-Type': 'application/json', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2', 'ARRAffinity': '79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5', 'ARRAffinitySameSite': '79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5' };
    // const params = { 'stateId': state_Id }
    console.log("###Before API CALL####");
    console.log(stateId)
    console.log("stateId::" + stateId);
    debugger
    return this.http.get<City[]>(this.baseUrlForGetCities, { 'headers': headers, }).pipe(
      tap((data) => console.log('API response:', data)),
      catchError(this.handleError)
    );
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

    return this.http.post<Registration>(this.baseUrlForRegister, UserRegistrationobj, { headers: headers }).pipe(

      catchError(this.handleError)
    );
  }
  //////////////////////////////login//////////////////////////////////////// 
  loginRequst(userobj: User): Observable<User> {
    const headers = { 'Content-Type': 'application/json', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2', 'ARRAffinity': '79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5', 'ARRAffinitySameSite': '79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5' };
    console.log("User login object:", userobj);
    return this.http.post(this.baseUrlForLogin, userobj, { headers: headers }).pipe(
      map((response: any) => {
        console.log("Full API Response:", response);
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
    return localStorage.getItem('token') || ''
  }
  Logedout() {
    localStorage.clear();
    this.router.navigateByUrl('home')
  }
  //////////////////////////////OtpValidation////////////////////////////////////////  
  OtpValidation(UserOtpValidationobj: otpValidation) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2', }
    console.log("hello");
    return this.http.post<otpValidation>(this.baseUrlForchangepassword, UserOtpValidationobj, { 'headers': headers })
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
