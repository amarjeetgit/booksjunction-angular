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
  }
  homenav(value: any) {
    this.r.navigate(['homesearch', value]);
  }
  logout() {

  }
}
