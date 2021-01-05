import {  Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../interface/user';
@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  checkToken : boolean  = false ;
  checkUser  : boolean  = false ;
  user : User | undefined;
  constructor(
    private authService : AuthService,
    private route : Router
  ) { } 
  checkLogin() : void {
    if(this.authService.getToken()){
      this.checkToken = true ;
    }else {
      this.checkToken = false ;
    }

    if(this.authService.getUser()){
      this.checkUser = true; 
      this.user = this.authService.getUser();
    }else {
      this.checkUser = false ;
    }
  }
  logout() :void {
    this.authService.deleteToken();
    this.authService.deleteUser();
    window.location.reload();
    this.route.navigate(['']);
  }
  ngOnInit(): void {
    this.checkLogin();
    console.log(this.user);
    
  }

}
