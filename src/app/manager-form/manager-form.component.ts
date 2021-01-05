import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router, Routes} from "@angular/router";
import { Blog } from '../interface/blog.detail';
import { ManagerService } from '../manager.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-manager-form',
  templateUrl: './manager-form.component.html',
  styleUrls: ['./manager-form.component.css']
})
export class ManagerFormComponent implements OnInit {  

  blogForm!: FormGroup;
  submitted = false;
  blog : Blog = {
    id: 0 ,
    title : "",
    images : "",
    description : "",
    Content : "",
    name : "",
  } ;

  constructor(
    private formBuilder : FormBuilder ,
    private router      : Router ,
    private route       : ActivatedRoute,
    private manager     : ManagerService ,
    private messageService : MessageService,
    private managerService : ManagerService,
  ) { }
  //geeter tiện lợi truy cập tới trường field
  get field_blog() { return this.blogForm.controls };

  getBlog() :any {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.managerService.getBlogEdit(id).subscribe(res => {
        if(res.status){
          this.getValueForm(res.blog_edit);
        }
      })
    }else {
      this.getValueForm(this.blog);
    }
  }

  getValueForm(blogs : any) {
    this.blogForm = this.formBuilder.group({
      title : [blogs.title,Validators.required],
      file  : "",
      description : [blogs.description,Validators.required],
      Content : [blogs.Content,Validators.required],
      name : [blogs.name,Validators.required]
    })
  }

  postAddBlog() : void {
    this.manager.add(this.blogForm.value).subscribe(data => {
      if(data.success){
        this.messageService.messagesNotifySuccess("Add Blog Successfully !","Add Blog !");
        this.router.navigate(['/manager']);
      }else {
        this.messageService.messagesNotifyErr("Add Blog fail",'Add Blog');
        this.router.navigate(['/manager']);
      }
    });
  }
  
  postEditBlog(id : any) : void {
    this.manager.edit(id,this.blogForm.value).subscribe(res => {
      if(res.success){
        this.messageService.messagesNotifySuccess("Edit Blog Successfully !","Edit Blog !");
        this.router.navigate(['/manager']);
      }else {
        this.messageService.messagesNotifyErr("Edit Blog fail",'Edit Blog');
        this.router.navigate(['/manager']);
      }
    })
  }

  onSubmit() : void {
    this.submitted = true ;
    if(this.blogForm.valid){
      if(this.route.snapshot.paramMap.get('id')){
        let id = this.route.snapshot.paramMap.get('id') ;
        this.postEditBlog(id);
      }else{
        this.postAddBlog();
      }
    }else {
      this.messageService.messagesNotifyErr("Check all field in form",'Check Field Blog');
    }
  }

  ngOnInit(): void {
    this.getBlog();
  }

}
