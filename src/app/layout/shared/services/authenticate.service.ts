import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../model/user';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'    
})
};

import { environment } from '../../../../environments/environment'

const loginbackendURL = environment.loginbackendURL;
const baseUrl = loginbackendURL+'api/User/verify/{guid} ';
const baseUrlAuth = loginbackendURL+'api/User/login';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
constructor(private http: HttpClient,private router: Router) { }
getAll(): Observable<User[]> {
  return this.http.get<User[]>(baseUrl);
}
findByAuth(user:User): Observable<any> {
  console.log("hello");
  console.log("baseUrlAuth::"+baseUrlAuth);
  return this.http.post<User>(baseUrlAuth , JSON.stringify(user), httpOptions,)
} 


  
}
