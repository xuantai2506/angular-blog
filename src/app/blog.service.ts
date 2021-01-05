import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private httpClient : HttpClient ,
    private messageService : MessageService,
  ) { }

  getCommentMain(data : any) : Observable<any> {
    const url = `${environment.URL_API}?ctl=manager&act=comment`;
    return this.httpClient.post<any>(url,data).pipe(
      tap(_ => this.messageService.messagesNotifySuccess('send request successfully',"Request API"))
    );
  }
  
  getBlog() : Observable<any> {
    const url = `${environment.URL_API}/index.php`;
    return this.httpClient.get<any>(url).pipe(
      tap(_ => this.messageService.messagesNotifySuccess("send request successfully","Request API !"))
    );
  }

  getBlogDetail(id : number) : Observable <any>{
    const url = `${environment.URL_API}/index.php?ctl=manager&act=detail&id=${id}`;
    return this.httpClient.get<any>(url).pipe(
      tap(_ => this.messageService.messagesNotifySuccess("send request successfully","Request API !"))
    );
  }
}
