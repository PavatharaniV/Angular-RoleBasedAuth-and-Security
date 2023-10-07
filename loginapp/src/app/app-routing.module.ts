import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CreateTaskComponent } from './user/create-task/create-task.component';
import { authGuard } from './auth_guard/auth.guard';
import { CreateTaskTLComponent } from './teamLeader/create-task-tl/create-task-tl.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ViewTaskTLComponent } from './teamLeader/view-task-tl/view-task-tl.component';
import { UpdateTaskTLComponent } from './teamLeader/update-task-tl/update-task-tl.component';
import { UpdateStatusTLComponent } from './teamLeader/update-status-tl/update-status-tl.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { ViewTaskComponent } from './user/view-task/view-task.component';
import { UpdateTaskComponent } from './user/update-task/update-task.component';
import { UpdateStatusComponent } from './user/update-status/update-status.component';
import { AssignedtableComponent } from './teamLeader/assignedtable/assignedtable.component';
import { AssignTaskComponent } from './teamLeader/assign-task/assign-task.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'unauthorized', component:ForbiddenComponent},

  //ADMIN
  {path:'admin', component:AdminDashboardComponent,canActivate:[authGuard],data:{role:['ADMIN']}},

  //TEAM_LEADER
  {path: 'tasks',component:CreateTaskTLComponent,canActivate:[authGuard],data:{role:['TEAMLEADER']}},
  {path:'tasks/:id/view', component:ViewTaskTLComponent,canActivate:[authGuard],data:{role:['TEAMLEADER']}},
  {path:'tasks/:id/update', component:UpdateTaskTLComponent,canActivate:[authGuard],data:{role:['TEAMLEADER']}},
  {path:'tasks/:id/status', component:UpdateStatusTLComponent,canActivate:[authGuard],data:{role:['TEAMLEADER']}},
  {path:'tasks/:id/view', component:ViewTaskTLComponent,canActivate:[authGuard],data:{role:['TEAMLEADER']}},
  {path:'tasks/:id/assign', component:AssignTaskComponent,canActivate:[authGuard],data:{role:['TEAMLEADER']}},
  {path:'tldashboard', component:AssignedtableComponent,canActivate:[authGuard],data:{role:['TEAMLEADER']}},

  //USER
  {path: 'task' ,component:CreateTaskComponent,canActivate:[authGuard],data:{role:['USER']}},
  {path:'task/:id/view', component:ViewTaskComponent,canActivate:[authGuard],data:{role:['USER']}},
  {path:'task/:id/update', component:UpdateTaskComponent,canActivate:[authGuard],data:{role:['USER']}},
  {path:'task/:id/status', component:UpdateStatusComponent,canActivate:[authGuard],data:{role:['USER']}},
  {path:'task/:id/viewss', component:ViewTaskComponent,canActivate:[authGuard],data:{role:['USER']}},
  {path:'dashboard', component:UserDashboardComponent,canActivate:[authGuard],data:{role:['USER']}},

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
