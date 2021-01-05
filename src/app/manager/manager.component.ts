import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Blog } from '../interface/blog.detail';
import { ManagerService } from '../manager.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  list_blogs : Blog[] | undefined ;

  constructor(
    private managerService : ManagerService,
    private messageService : MessageService,
    private routes          : ActivatedRoute,
  ) { }

  getBlogOfUser() : void {
    this.managerService.getBlogOfUser().subscribe(data => {
      if(data.success){
        this.list_blogs = data.list_blog;
      }else {
        this.messageService.messagesNotifyErr("Can not show blog for you !",'Notify');
      }
    })
  }

  postDelBlog(id : any) :void {
    this.managerService.del(id).subscribe(res => {
      if(res.success){
        this.list_blogs = res.list_blog;
      }else {
        this.messageService.messagesNotifyErr("Can not delete blog for you !",'Notify');
      }
    })    
  } 

  ngOnInit(): void {
    this.getBlogOfUser();
    if(this.routes.snapshot.paramMap.get('id')){
      let id = this.routes.snapshot.paramMap.get("id");
      this.postDelBlog(id);
    }
  }

}
