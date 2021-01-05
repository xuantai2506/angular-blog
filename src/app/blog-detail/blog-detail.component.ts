import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { MessageService } from '../message.service';
import { Blog } from '../interface/blog.detail';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  detail: Blog | undefined;
  list_comment : any = [];
  loading: boolean = true;
  constructor(
    private router : ActivatedRoute ,
    private blogService : BlogService ,
    private messageService : MessageService,
  ) { }
  
  getBlogDetail(){
    let id = +this.router.snapshot.paramMap.get('id')!;
    this.loading = true;
    this.blogService.getBlogDetail(id).subscribe(data => {
      if(data.success){
        this.detail       = data['detail'];
        this.list_comment = data['comment'];
      }else {
        this.messageService.messagesNotifyErr('Detail not found ','Show Detail !');
      }
      this.loading = false;
    }, _ => {
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.getBlogDetail();
    
  }

}
