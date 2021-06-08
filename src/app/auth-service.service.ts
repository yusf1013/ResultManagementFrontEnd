import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private router: Router ) { }

  login(data):Observable<any> {
    return this.http.post(`${baseUrl}authmanagement/login/`, data);
  }

  register(data):Observable<any> {
    return this.http.post(`${baseUrl}authmanagement/register/`, data);
  }

  userType():Observable<any> {
    return this.http.get(`${baseUrl}examresults`);
    
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
