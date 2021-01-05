import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap,map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpClient : HttpClient ,
  ) { }

  register(data:any) : Observable<any> {
    const url = `${environment.URL_API}?ctl=member&act=registerUser`;
    return this.httpClient.post<any>(url,data)
  }
  
  login(data : any) : Observable<any> {
    const url = `${environment.URL_API}?ctl=member&act=loginUser`;
    return this.httpClient.post<any>(url,data);
  }

  setToken(token : string){
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  setUser(user: any){
    sessionStorage.setItem('user',JSON.stringify(user));
  }

  getUser(){
    return JSON.parse(sessionStorage.getItem('user')!);
  }

  deleteUser(){
    sessionStorage.removeItem('user');
  }
}
