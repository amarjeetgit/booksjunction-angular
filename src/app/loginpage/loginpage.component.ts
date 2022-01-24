import { Component, OnInit } from '@angular/core';
import { UtilMethods } from '../Utilities/util-methods';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(public util: UtilMethods) { }
  loggedIn: boolean = false;
  loginPageEnabled: boolean = true;
  username: string;
  password: string;
  registerPageEnabled: boolean = false;
  ngOnInit() {

  }
  resetPassword() { }
  userRegister() {
    this.loginPageEnabled = false;
    this.registerPageEnabled = true;
  }
  loginEnable() {
    this.loginPageEnabled = true;
    this.registerPageEnabled = false;
  }
  login() {
    if (this.util.env.mockData) {
      console.log("Login using mock data");
    }
    else {
      console.log("Login using real data");
    }
    console.log(this.username);
    console.log(this.password);
  }
  register() {
    console.log("registering");
  }
}
