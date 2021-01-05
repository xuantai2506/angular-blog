import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BlogService } from '../blog.service';
import { Blog } from '../interface/blog.detail';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog : Blog[] | undefined = [];
  constructor(
    private authService : AuthService,
    private blogService : BlogService ,
  ) { }
  // response
  getBlog(){
    this.blogService.getBlog().subscribe(data => {
      if(data.blogs)
        this.blog = data.blogs
    })
  }
  ngOnInit(): void {
    this.getBlog();
  }
}
