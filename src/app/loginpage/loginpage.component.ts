import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from '../Customers';
import { DbserviceService } from '../dbservice.service';
import { LoginServiceService } from '../services/login/login-service.service';
import { UtilMethods } from '../Utilities/util-methods';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(public util: UtilMethods, private loginservice: LoginServiceService, public router: Router, private dbService: DbserviceService) { }
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
      console.log("mock data");
      let user: Customers;
      this.dbService.getJSON('./assets/users.json').subscribe(data => {
        user = data[0];
        console.log(user);
        if (user.email == this.username && user.password == this.password) {
          console.log("data is correct")
          sessionStorage.setItem("user", JSON.stringify(user));
          this.router.navigateByUrl('/home');
        }
        else {
          alert("Password/Username are incorrect");
        }
      });
    }
    else {
      console.log("backend data calling");
      return null;
    }
    return null;
  }
  register() {
    let body = [
      {
        "name": "Amarjeet Nirala",
        "mobile": "8757018722",
        "email": "abc@gmail.com",
        "address": "Bangalore",
        "password": "12345611",
        "custId": "amar321",
        "totalWishlisted": 4,
        "totalInCart": 8,
        "wishlisted": [
          {}
        ],
        "inCart": [
          {}
        ]
      }
    ];
    var wf = require('write-file');
    wf('./assets/test.json', { foo: 'bar' }, function (err) {
      console.log("registering");
    })
    // this.dbService.setJson('./assets/', body).subscribe(data => {

    //   console.log("registering");
    // });

  }
}
