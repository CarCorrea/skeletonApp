import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user={
    userName:"",
    password:""
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  ingresar() {
    let navigationExtras: NavigationExtras ={
      state:{user: this.user.userName}
    };
    this.router.navigate(['/home'], navigationExtras);
  };
}
