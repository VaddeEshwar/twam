import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://103.210.75.43:5004/signupuser';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }  
  )
};
@Injectable()
export class SignupService {

  constructor(private http: HttpClient) { }

  userRegistration(formData:any): Observable<any> {
    console.log('AUTH_API::',AUTH_API);
    console.log('uname service::'+JSON.stringify(formData));
    return this.http.post(AUTH_API , JSON.stringify(formData), httpOptions);
  }

}
