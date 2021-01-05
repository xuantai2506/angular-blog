import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-comment-main',
  templateUrl: './blog-comment-main.component.html',
  styleUrls: ['./blog-comment-main.component.css']
})
export class BlogCommentMainComponent implements OnInit {
  @Input() comments : any ;
  constructor() { }

  ngOnInit(): void {
  }

}
