import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable,throwError,BehaviorSubject,switchMap,filter,take } from 'rxjs';
import { AdminserviceService } from '../services/user-service/user-service.service'


@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorserviceService implements HttpInterceptor {

  constructor(private inject: Inject) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let AuthenticateService = this.inject.get(AdminserviceService)
    let authreq = Request;
    authreq = Request.clone({
      setHeaders: {
        authorization: 'bearer' + AuthenticateService.GetToken()
      }

    })
    return next.handle(authreq).pipe(
      catchError (errordata=>{
        if(errordata.status===401){

        }
      })
    )
  }
 AddTokenheader(request:HttpRequest<any>,token:any){
  return request.clone({headers:request.headers.set('Authorization','bearer '+token)});
 }
}
