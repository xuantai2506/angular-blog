import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../interface/blog.detail';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-blog-comment',
  templateUrl: './blog-comment.component.html',
  styleUrls: ['./blog-comment.component.css']
})
export class BlogCommentComponent implements OnInit {
  @Input()  detail!: Blog;
  @Input() list_comment: any ;
  comment : any ;
  data = {};

  constructor(
    private blogService : BlogService,
    private messageService : MessageService
  ) { }

  getCommentMain():void {
    this.data = {
      'comment' : this.comment ,
      'blog_id' : this.detail.id ,
    }
    this.comment = "";
    this.blogService.getCommentMain(this.data).subscribe(res => {
      if(res.success){
        this.list_comment =  res.list_comment;
      }else {
        this.messageService.messagesNotifyErr("Sever Error!",'Notify');
      }
    });
  }

  ngOnInit(): void {  
  }

}
