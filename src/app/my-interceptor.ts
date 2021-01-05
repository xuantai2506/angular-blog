import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter,tap, catchError } from 'rxjs/operators';
import { inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { MessageService } from './message.service';
@Injectable()
export class MyInterceptor implements HttpInterceptor {
    constructor(
      private authService : AuthService ,
      private router : Router ,
      private messageService : MessageService,
    ) { }
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let Authorization = this.authService.getToken();
        if(Authorization == null){
            Authorization = "";
        }
        return next.handle(httpRequest.clone({ setHeaders: { Authorization, 'Content-Type': 'application/json' } }))
        .pipe(
            tap(evt => {
                if(evt instanceof HttpResponse){
                    if(evt.body.status == 401){
                        this.authService.deleteToken();
                        this.messageService.messagesNotifyErr("Token Can Expired ! Please check login !",'You need login !');
                        this.router.navigate(['/']);
                    }
                }
            })
        )
        ;
    }
}