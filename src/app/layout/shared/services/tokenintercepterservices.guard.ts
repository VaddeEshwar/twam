import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AdminserviceService} from '../../../services/user-service/user-service.service';
@Injectable({
  providedIn: 'root'
})
export class TokenintercepterservicesGuard implements HttpInterceptor {
 constructor(private service:AdminserviceService){

 }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Unauthorized error, refresh the token
          const userGUID = ''; 
          const refreshToken = ''; 
          const expiryDate = '';

          return this.service.refreshToken(userGUID, refreshToken, expiryDate).pipe(
            switchMap((response) => {
              // Update the token in local storage and retry the failed request
              const newToken = response.accessToken;
              localStorage.setItem('accessToken', newToken);
              
              // Clone the original request and add the new token
              const clonedRequest = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${newToken}`
                }
              });

              return next.handle(clonedRequest);
            })
          );
        }

        return throwError(error);
      })
    );
  }
}
