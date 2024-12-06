import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AdminserviceService } from './services/user-service/user-service.service';
import { Getping} from './model/Users/Getping';
import {RefreshPayload  } from './model/authentication/refresh';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  pingResult: Getping[] = [];
  title = 'Twam';
  dbSuccessData: any;
  loading$: Observable<boolean> = of(false);
  constructor(private router: Router,private service: AdminserviceService) {}
  ngOnInit() {
    this.getPingResult();
    this.router.events.subscribe();
    this.router.events.pipe(
      filter(
        (e) =>
          e instanceof NavigationStart ||
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
      )
    )
    // ONLY runs on:
    // NavigationStart, NavigationEnd, NavigationCancel, NavigationError
    .subscribe();

    this.service.getUserRoles().subscribe(
      response => {
        
        console.log('Roles fetched successfully');
      },
      error => {
        
        console.error('Error fetching roles', error);
      }
    );
    this.refreshToken();
    this.getDbSuccessData();
}
refreshToken(): void {
  const payload: RefreshPayload  = {
    userGUID: '50CE0F43-65E7-43E4-96AC-A6D1A2BD56E2', 
    refreshToken: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQzhCQzJDREYtQTE5RC00RUQxLUEzMEItNEZFQjJBNTA0NjBFIiwiZXhwIjoxNzI4MDUxMjM4LCJpc3MiOiJodHRwczovL3JuZHRlY2hpZXNzZXJ2aWNlcy1nbWUzYmhnY2IzYnNhOGN6LnNvdXRoaW5kaWEtMDEuYXp1cmV3ZWJzaXRlcy5uZXQvIiwiYXVkIjoiaHR0cHM6Ly9ybmR0ZWNoaWVzc2VydmljZXMtZ21lM2JoZ2NiM2JzYThjei5zb3V0aGluZGlhLTAxLmF6dXJld2Vic2l0ZXMubmV0LyJ9.unjnfZK9K3wvXD_7t_2lA4zox2zf27FCcXx4geFxr4M',
    expiryDate: new Date().toISOString() 
  };
  this.service.refreshToken(payload).subscribe(
    (response) => {
      console.log('Token refreshed successfully:', response);
    },
    (error) => {
      console.error('Error refreshing token:', error);
    }
  );
}
getDbSuccessData(): void {
  this.service.GetDbsuccess().subscribe(
    (response) => {
      this.dbSuccessData = response;
      console.log('DB Success Data:', this.dbSuccessData);
    },
    (error) => {
      console.error('Error fetching data', error);
    }
  );
}

getPingResult(): void {
  const dateTime = new Date().toISOString(); 
  this.service.Getping(dateTime).subscribe(
    (response) => {
      this.pingResult = response;
      console.log('Ping Result:', this.pingResult);
      alert(' this.pingResult:')
    },
    (error) => {
      if (error.status === 401) {
        console.error('Unauthorized - Please check your credentials');
      } else {
        console.error('Error fetching ping:', error);
      }
    }
  );
}

  
  }


