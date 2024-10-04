import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AdminserviceService} from '../app/services/user-service/user-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Twam';
  loading$: Observable<boolean> = of(false);
  constructor(private router: Router,private service: AdminserviceService) {}
  ngOnInit() {
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
        debugger
        console.error('Error fetching roles', error);
      }
    );
    const userGUID = '';
    const refreshToken = '';
    const expiryDate = '';
    this.service.refreshToken(userGUID, refreshToken, expiryDate)
    .subscribe(
      (response) => {
        console.log('Token refreshed successfully:', response);
        // Handle the new token, such as storing it in localStorage
        localStorage.setItem('accessToken', response.newAccessToken);
      },
      (error) => {
        console.error('Error refreshing token:', error);
        // Handle error (e.g., logout user if refresh fails)
      }
    );
}

    

  
  }


