import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private router: Router ) { }

  // login(data):Observable<any> {
  //   return this.http.post(`${baseUrl}authmanagement/login/`, data);
  // }

  getStudentDetails():Observable<any> {
    return this.http.get(`${baseUrl}studentdetails`);
  }

  getRequest(url):Observable<any> {
    return this.http.get(`${baseUrl}${url}`);
  }

  putRequest(url, data):Observable<any> {
    return this.http.put(`${baseUrl}${url}`, data);
  }

  postRequest(url, data):Observable<any> {
    return this.http.post(`${baseUrl}${url}`, data);
  }

  delRequest(url):Observable<any> {
    return this.http.delete(`${baseUrl}${url}`);
  }

  
}
