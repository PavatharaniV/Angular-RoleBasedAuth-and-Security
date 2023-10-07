import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CreateTaskComponent } from './user/create-task/create-task.component';
import { RouterModule } from '@angular/router';
import { CreateTaskTLComponent } from './teamLeader/create-task-tl/create-task-tl.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UpdateTaskComponent } from './user/update-task/update-task.component';
import { UpdateStatusComponent } from './user/update-status/update-status.component';
import { AssignTaskComponent } from './teamLeader/assign-task/assign-task.component';
import { UpdateTaskTLComponent } from './teamLeader/update-task-tl/update-task-tl.component';
import { ViewTaskTLComponent } from './teamLeader/view-task-tl/view-task-tl.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { UpdateStatusTLComponent } from './teamLeader/update-status-tl/update-status-tl.component';
import { ViewTaskComponent } from './user/view-task/view-task.component';
import { AuthInterceptor } from './auth_guard/auth.interceptor';
import { AssignedtableComponent } from './teamLeader/assignedtable/assignedtable.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForbiddenComponent,
    HomeComponent,
    HeaderComponent,
    CreateTaskComponent,
    CreateTaskTLComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    UpdateTaskComponent,
    UpdateStatusComponent,
    AssignTaskComponent,
    UpdateTaskTLComponent,
    ViewTaskTLComponent,
    UpdateStatusTLComponent,
    ViewTaskComponent,
    AssignedtableComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgSelectModule

    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass :AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
