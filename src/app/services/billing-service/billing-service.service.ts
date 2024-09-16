import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/Address'
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
const backEndUrl = environment.backendURL;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'    
})
};


// const baseUrlForPersistGeneralSetting = backEndUrl+"/api/admin/persistGlobalInfo";


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
constructor(private http: HttpClient,private router: Router) { }


}
