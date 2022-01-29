import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/Customers';
import { UtilMethods } from 'src/app/Utilities/util-methods';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  constructor(public util: UtilMethods) { }
  loggedin: boolean;
  currentUserInfo: Customers;
  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.util.checkdata();
    this.currentUserInfo = this.util.currentUserInfo;
    this.loggedin = this.util.loggedin;
  }

}
