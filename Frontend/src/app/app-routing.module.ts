import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { StdformComponent } from './stdform/stdform.component';
import { StdhomeComponent } from './stdhome/stdhome.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'studentlogin',
    component: StudentloginComponent
  },
  {
    path: 'studentsignup',
    component: StudentsignupComponent
  },
  {
    path: 'studenthome',
    component: StudenthomeComponent,
    children: [
      {path: 'stdhome', component:StdhomeComponent},
      {path: 'viewprofile', component:ViewprofileComponent},
      {path: 'stdform', component:StdformComponent}
    ]
  },
  {
    path: 'login',
    component: LoginComponent 
  },
  {
    path: 'signup',
    component: SignupComponent 
  },
  {
    path: 'adminhome',
    component: AdminhomeComponent,
    children: [
      {path: 'dashboard', component:DashboardComponent},
      {path: 'students', component:StudentsComponent},  
      {path: 'students/update', component:UpdateComponent}
    ]
  },
  {
    path: 'stdform',
    component: StdformComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
