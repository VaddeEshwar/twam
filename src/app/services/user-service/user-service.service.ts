/////////User-Services-Component///////////////////////////
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule, HttpHeaders ,HttpErrorResponse} from '@angular/common/http';
//////////////////model//////////////////////////////////////
import { Address } from '../../model/Address/address';
import { AddressMap } from '../../model/Address/UserAddressMap'
import { Registration } from '../../model/Users/registration';
import { otpValidation } from '../../model/Users/otpValidation';
import { UpdateuserRequest } from '../../model/Users/UpdateuserRequest';
import { Country } from '../../model/Common/Countries';
import { Emailactivity } from '../../model/Users/emailuserid';
import { login } from '../../model/Users/Login'
//////////////////model//////////////////////////////////////


const backendURL = environment.backEndUrl;

/////////////////////////Common///////////////////////////////
const baseUrlForGetCountries = backendURL + "/Common/GetCountries";  //////Get-method
const baseUrlForGetCities = backendURL + "/Common/GetCities";  //////Get-method
const baseUrlForGetStates = backendURL + "/Common/GetStates"; //////post-method
/////////////////////User-Method/////////////////////////////////////
const baseUrlForRegister = backendURL + "/User/register"; //////post-method
const baseUrlForLogin = backendURL + "/User/login"; //////post-method
const baseUrlForUserverify = backendURL + "/User/verify"; //////Get-method
const baseUrlForupdateuserdetails = backendURL + "/User/updateuserdetails"; //////Put-method
const baseUrlForGetping = backendURL + "/User/Getping"; //////Get-method
const baseUrlForGetDbsuccess = backendURL + "/User/GetDbsuccess"; //////Get-method
const baseUrlForOtpValidation = backendURL + "/User/OtpValidation"; //////Get-method
////////////////////Address/////////////////////////////
const baseUrlForAddress = backendURL + "/Address/addAddress"; //////post-method
const baseUrlForUserAddressMap = backendURL + "/Address/UserAddressMap"; //////post-method
////////////////////Authentication/////////////////
const baseUrlForAuthenticationrefresh = backendURL + "/Auth/refresh"; //////post-method
const baseUrlForAuthenticationrefresh_token = backendURL + "/Auth/refresh-token"; /////Get-method
const baseUrlForGetUserIdFromRefreshTokenAsync = backendURL + "/Auth/GetUserIdFromRefreshTokenAsync"; //////post-method
/////////////////////Password/////////////////////////////////////
const baseUrlForchangepassword = backendURL + "/Password/change-password"; //////post-method
const baseUrlForgeneratepassword = backendURL + "/Password/generate"; //////post-method
/////////////////////Roles-Get method/////////////////////////////////////
const baseUrlForGetRoles = backendURL + "/Roles/GetRoles"; //////post-method

/////////////////////Useractivity-Method/////////////////////////////////////
// const baseUrlForUseractivityEmailHistory = backendURL + "/Useractivity/insertEmailHistory";
const baseUrlForGetEmailHistorybyUserId = backendURL + "/Useractivity/GetEmailHistorybyUserId";//////post-method
const baseUrlForgetUserActivities = backendURL + "/Useractivity/getUserActivities";//////post-method
// const baseUrlForInsertUserActivity = backendURL + "/Useractivity/InsertUserActivity";//////post-method

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2',
  })
};

@Injectable({
  providedIn: 'root'
})

export class AdminserviceService {
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
//////////////////////////HttpErrorResponse//////////////////////////////////
  getAllCountries(): Observable<Country[]> {
    debugger
    console.log("###Before API CALL####");
    console.log(Country)
    console.log("Country::"+Country);
    return this.http.get<[Country]>(baseUrlForGetCountries) .pipe(
      catchError(this.handleError)
    );
  }
  getAllCity() {
    return this.http.get(baseUrlForGetCities)
  }

  saveEmailSetting(emailSetting: Emailactivity): Observable<Emailactivity> {
    const headers = { 
       'Content-Type': 'application/json',
       'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2'
       };
    console.log("###Before API CALL####");
    console.log(emailSetting);
    console.log("###After API CALL####");
    return this.http.post<Emailactivity>(baseUrlForGetEmailHistorybyUserId, JSON.stringify(Registration), { headers: headers })
  }
  ///////////////////////Address/////////////////////
  SaveAddress(addressmoduleobj: Address) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'true' };
    console.log("hello");
    return this.http.post<Address>(baseUrlForAddress, addressmoduleobj, { 'headers': headers })
  }
  saveUserAddressMap(UserAddressMapobj: AddressMap) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'true' };
    console.log("hello");
    return this.http.post<Address>(baseUrlForUserAddressMap, UserAddressMapobj, { 'headers': headers })
  }

  //////////////////////////////Registration//////////////////////////////////////// 
  saveregistration(UserRegistrationobj: Registration): Observable<Registration> {
    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2', };
    console.log("Eshwar hello");
    console.log("User Registration object:", UserRegistrationobj);
    debugger
    return this.http.post<Registration>(baseUrlForRegister, JSON.stringify(UserRegistrationobj), { headers: headers }).pipe(
      catchError(this.handleError)
    );;
  }
  //////////////////////////////login//////////////////////////////////////// 

  loginRequst(loginData: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2', };
    console.log("User Registration object:", loginData);
    return this.http.post(baseUrlForLogin, JSON.stringify(login), { headers: headers });

  }

  //////////////////////////////OtpValidation////////////////////////////////////////  
  OtpValidation(UserOtpValidationobj: otpValidation) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2', }
    console.log("hello");
    return this.http.post<otpValidation>(baseUrlForOtpValidation, UserOtpValidationobj, { 'headers': headers })
  }
  //////////////////////////////////////////User verifaction///////////////////////////
  Getuserverifaction(guid: string) {
    let gu_id = guid + "";
    let params: URLSearchParams = new URLSearchParams();
    const httpOptions = {
      headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2', },
      params: { 'guid': gu_id }
    };
    return this.http.get<[]>(baseUrlForUserverify, httpOptions);
  }
  /////////////////////////////////user update address///////////////////////////////
  SaveupdateAdd(userupdateaddressobj: any) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2', }
    return this.http.put<UpdateuserRequest>(baseUrlForupdateuserdetails, JSON.stringify(userupdateaddressobj), { 'headers': headers })
  }
  /////////////////////////////////Useractivity///////////////////////////////

}
