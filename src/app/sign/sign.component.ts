import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  name : any ;
  email : any ;
  password : any ;
  confirm : any ;
  constructor(
    private authService : AuthService,
    private messageService : MessageService   ,
    private router : Router,
  ) { 
  }

    ;

  register() {
    let data = {
      'email' : this.email,
      'name'  : this.name,
      'password' : this.password,
      'confirm' : this.confirm,
    }
    this.authService.register(data).subscribe(
      data => {
        if(data.success){
          this.messageService.messagesNotifySuccess(data.message,'Registers Notify');

        }else {
          this.messageService.messagesNotifyErr(data.message,'Register Notify')
        }
      },
    )
  }
  login() {
    let data = {
      'email' : this.email,
      'password' : this.password,
    }
    this.authService.login(data).subscribe(
      data => {
        if(data.success){
          this.authService.setToken(data['fetch'].token);
          this.authService.setUser(data['fetch'].user);
          this.messageService.messagesNotifySuccess(data.message,'Login Notify');
          window.location.reload();
          this.router.navigate(['blog-detail/1']);
        }else {
          this.messageService.messagesNotifyErr(data.message,'Login Notify');
        }
      }
    )
    
  }

  ngOnInit(): void {
  }

}
