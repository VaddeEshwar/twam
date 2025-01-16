import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AdminserviceService } from './services/user-service/user-service.service';
import { Getping } from './model/Users/Getping';
import { RefreshToken } from './model/authentication/refresh';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  response: any;
  pingResult: Getping[] = [];
  title = 'Twam';
  dbSuccessData: any;
  apiResponse: any;
  loading$ = new BehaviorSubject<boolean>(false); 
  constructor(private router: Router, private service: AdminserviceService) {}
  ngOnInit() {
    this.getDbSuccessData();
    // Handle router events
    this.router.events.pipe(
      filter(
        (e) =>
          e instanceof NavigationStart ||
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
      )
    ).subscribe(event => {
      // console.log('Router Event:', event);
    });

    // Fetch user roles
    this.service.getUserRoles().subscribe(
      response => {
        console.log('Roles fetched successfully');
      },
      error => { 
        console.error('Error fetching roles', error);
      }
    );

    const dateTime = new Date().toISOString(); 
    this.loading$.next(true); 
    this.service.getPing(dateTime).subscribe({
      next: (res) => {
        console.log('API Response:', res);
        this.response = res;
        this.loading$.next(false); 
      },
      error: (err) => {
        console.error('Error calling API:', err);
        if (err.status === 401) {
          console.error('Unauthorized: Please check your token.');
        }
        this.loading$.next(false); 
      },
    });
  }


  getDbSuccessData() {
    this.service.GetDbsuccess().subscribe({
      next: (response) => {
        console.log('API Response:', response);
        this.apiResponse = response; 
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }
}





