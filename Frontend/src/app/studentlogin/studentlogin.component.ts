import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
  user={
    email:"",
    password:""
  };
  constructor(private _auth: AuthService, private _router:Router,public header: HeaderService, public nav: NavbarService) { }

  ngOnInit(): void {
    this.header.show();
    this.nav.hide();
  }

  userLogin () {
    
    this._auth.userLogin(this.user)
    .subscribe(
      res => {
          this._router.navigate(['/studenthome']);
      },
      err => {
        console.log(err);
        alert('Invalid login credentials')
        this._router.navigate(['/studentlogin'])
      }
    ) 
  }
}
