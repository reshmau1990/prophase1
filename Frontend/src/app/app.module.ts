import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StdformComponent } from './stdform/stdform.component';
import { StdenrolledComponent } from './stdenrolled/stdenrolled.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { StdhomeComponent } from './stdhome/stdhome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    StudentloginComponent,
    StudentsignupComponent,
    StudenthomeComponent,
    SignupComponent,
    LoginComponent,
    AdminhomeComponent,
    NavbarComponent,
    StdformComponent,
    StdenrolledComponent,
    ViewprofileComponent,
    StdhomeComponent,
    DashboardComponent,
    StudentsComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [AuthService,AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
