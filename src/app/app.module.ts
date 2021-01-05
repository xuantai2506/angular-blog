import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from  '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { SignComponent } from './sign/sign.component';
import { MyInterceptor } from './my-interceptor';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';
import { AuthGuard } from './auth.guard';
import { ManagerComponent } from './manager/manager.component';
import { ManagerFormComponent } from './manager-form/manager-form.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { BlogCommentComponent } from './blog-comment/blog-comment.component';
import { BlogCommentMainComponent } from './blog-comment-main/blog-comment-main.component';
@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    SignComponent,
    BlogDetailComponent,
    BlogComponent,
    ManagerComponent,
    ManagerFormComponent,
    ControlMessagesComponent,
    BlogCommentComponent,
    BlogCommentMainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
