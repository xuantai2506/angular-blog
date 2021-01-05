import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';
import { ManagerFormComponent } from './manager-form/manager-form.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  { 
    path : "", component : BlogComponent 
  },
  {
    path : "manager",
    component : ManagerComponent,
    canActivate : [AuthGuard],
  },
  {
    path : "manager/add",
    component : ManagerFormComponent,
    canActivate : [AuthGuard], 
  },
  {
    path : "manager/edit/:id",
    component : ManagerFormComponent,
    canActivate : [AuthGuard]
  },
  {
    path : "blog-detail/:id",
    component : BlogDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
