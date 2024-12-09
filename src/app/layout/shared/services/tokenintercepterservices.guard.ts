import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AdminserviceService } from '../../../services/user-service/user-service.service';

@Injectable({
  providedIn: 'root',
})
export class TokenintercepterservicesGuard implements HttpInterceptor {
  constructor(private service: AdminserviceService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const clonedReq = token
      ? req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`),
        })
      : req;

    return next.handle(clonedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          const userGUID = localStorage.getItem('userGUID');
          const refreshToken = localStorage.getItem('refreshToken');
          const expiryDate = localStorage.getItem('expiryDate');

          if (userGUID && refreshToken && expiryDate) {
            return this.service.refreshToken(userGUID, refreshToken, expiryDate).pipe(
              switchMap((response: any) => {
                console.log('New Token Received:', response.newToken);
                localStorage.setItem('token', response.newToken);
                const newClonedReq = req.clone({
                  headers: req.headers.set('Authorization', `Bearer ${response.newToken}`),
                });
                return next.handle(newClonedReq);
              }),
              catchError((refreshError) => {
                console.error('Token refresh failed:', refreshError);
                return throwError(refreshError);
              })
            );
          }
        }
        return throwError(error);
      })
    );
  }
}

