import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(
    private httpClient : HttpClient,
  ) { }
  getBlogEdit(id : any):Observable <any> {
    const url = `${environment.URL_API}?ctl=manager&act=getBlogEdit&id=${id}`;
    return this.httpClient.get<any>(url);
  }
  getBlogOfUser() : Observable <any> {
    const url = `${environment.URL_API}?ctl=manager`;
    return this.httpClient.get<any>(url);
  }

  add(blog_data : any) : Observable <any> {
    const url = `${environment.URL_API}?ctl=manager&act=add`;
    return this.httpClient.post<any>(url,blog_data);
  }

  edit(id:any ,blog_data : any) : Observable <any> {
    const url = `${environment.URL_API}?ctl=manager&act=edit&id=${id}`;
    return this.httpClient.post<any>(url,blog_data);
  }

  del(id :any) :Observable<any> {
    const url = `${environment.URL_API}?ctl=manager&act=del&id=${id}`;
    return this.httpClient.post<any>(url,"");
  }
}
