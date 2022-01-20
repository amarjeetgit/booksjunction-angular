import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public r: Router) { }
  ngOnInit() {

  }
  check() {
    this.r.navigate(['contact']);
  }
  homenav(value: any) {
    this.r.navigate(['homesearch', value]);
  }
}
