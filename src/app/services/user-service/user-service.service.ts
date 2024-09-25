/////////User-Services-Component///////////////////////////
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
//////////////////model//////////////////////////////////////
import { Address } from '../../model/Address/address';
import { AddressMap } from '../../model/Address/UserAddressMap'
import { Registration } from '../../model/Users/registration';
import { otpValidation } from '../../model/Users/otpValidation';
import { UpdateuserRequest } from '../../model/Users/UpdateuserRequest';
import { Country } from '../../model/Common/Countries';
import { Emailactivity } from '../../model/Users/emailuserid'
//////////////////model//////////////////////////////////////


const backEndUrl = environment.backendURL;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-App-Type': '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2',
  })
};
/////////////////////////Common///////////////////////////////
const baseUrlForGetCountries = backEndUrl + "/Common/GetCountries";  //////Get-method
const baseUrlForGetCities = backEndUrl + "/Common/GetCities";  //////Get-method
const baseUrlForGetStates = backEndUrl + "/Common/GetStates"; //////post-method
/////////////////////User-Method/////////////////////////////////////
const baseUrlForRegister = backEndUrl + "/User/register"; //////post-method
const baseUrlForLoginn = backEndUrl + "/User/Loginn"; //////post-method
const baseUrlForLogin = backEndUrl + "/User/login"; //////post-method
const baseUrlForUserverify = backEndUrl + "/User/verify"; //////Get-method
const baseUrlForupdateuserdetails = backEndUrl + "/User/updateuserdetails"; //////Put-method
const baseUrlForGetping = backEndUrl + "/User/Getping"; //////Get-method
const baseUrlForGetDbsuccess = backEndUrl + "/User/GetDbsuccess"; //////Get-method
const baseUrlForOtpValidation = backEndUrl + "/User/OtpValidation"; //////Get-method
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
/////////////////////Roles-Get method/////////////////////////////////////
const baseUrlForGetRoles = backEndUrl + "/Roles/GetRoles"; //////post-method

/////////////////////Useractivity-Method/////////////////////////////////////
// const baseUrlForUseractivityEmailHistory = backEndUrl + "/Useractivity/insertEmailHistory";
const baseUrlForGetEmailHistorybyUserId = backEndUrl + "/Useractivity/GetEmailHistorybyUserId";//////post-method
const baseUrlForgetUserActivities = backEndUrl + "/Useractivity/getUserActivities";//////post-method
// const baseUrlForInsertUserActivity = backEndUrl + "/Useractivity/InsertUserActivity";//////post-method

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  constructor(private http: HttpClient, private router: Router) { }

  getAllCountries(): Observable<Country[]> {
    console.log(Country)
    return this.http.get<[Country]>(baseUrlForGetCountries)
  }
  getAllCity() {
    return this.http.get(baseUrlForGetCities)
  }

  saveEmailSetting(emailSetting: Emailactivity): Observable<Emailactivity> {

    console.log("###Before API CALL####");
    console.log(emailSetting);
    console.log("###After API CALL####");
    return this.http.post<Emailactivity>(baseUrlForGetEmailHistorybyUserId, emailSetting, httpOptions)
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
  saveregistration(UserRegistrationobj: Registration) {
    console.log("Eshwar hello");
    console.log("UserRegistrationobj::" + JSON.stringify(UserRegistrationobj));
    debugger
    return this.http.post<Registration>(baseUrlForRegister, UserRegistrationobj, httpOptions)

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
