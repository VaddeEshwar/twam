import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://103.210.75.43:5004/userlogin/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }  
  )
};
@Injectable()
export class MyserviceService {

  constructor(private http: HttpClient) { }

  checkusernameandpassword(uname: string, pwd: string): Observable<any> {
    console.log('AUTH_API::',AUTH_API);
    console.log('uname service::'+uname);
    return this.http.post(AUTH_API , {
      userName: uname,
      password: pwd
    }, httpOptions);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('userName');
	}
}
