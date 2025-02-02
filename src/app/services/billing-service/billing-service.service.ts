import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

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
