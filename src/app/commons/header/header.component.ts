import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public r: Router) { }
  loggedin: string;
  ngOnInit() {
    localStorage.setItem("loggedin", "true");
    this.loggedin = localStorage.getItem("loggedin");
  }
  homenav(value: any) {
    this.r.navigate(['homesearch', value]);
  }
  logout() {
    if (this.loggedin == "true") {
      localStorage.setItem("loggedin", "false")
      this.loggedin = "false";
      alert("logging out");
    }

  }
}
