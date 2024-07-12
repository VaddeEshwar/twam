import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../model/user';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'    
})
};



@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
constructor(private http: HttpClient,private router: Router) { }

  


  
}
