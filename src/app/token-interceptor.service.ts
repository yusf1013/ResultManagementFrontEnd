import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,   HttpErrorResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token'); 
    

    let tokenizedReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
      }
    })
    

    return next.handle(tokenizedReq).pipe(tap(() => {},
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 404) 
            this.router.navigate(['404']);
          else if (err.status === 403) 
            this.router.navigate(['403']);
          else if (err.status === 401) 
            this.router.navigate(['login']);
          else
            return;
          
        }
    }));
  }

  
}

