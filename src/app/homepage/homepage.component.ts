import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Customers } from '../Customers';
import { UtilMethods } from '../Utilities/util-methods';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  loggedin: boolean;
  currentUserInfo: Customers;
  constructor(public r: Router, public util: UtilMethods) { }
  ngOnInit() {
    this.checkdata();
  }
  check() {
    this.r.navigate(['contact']);
  }
  homenav(value: any) {
    this.r.navigate(['homesearch', value]);
  }

  checkdata() {
    this.util.checkdata();
    this.currentUserInfo = this.util.currentUserInfo;
    this.loggedin = this.util.loggedin;
  }

}
