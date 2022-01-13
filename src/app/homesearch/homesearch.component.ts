import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Books } from '../Books';
import { DbserviceService } from '../dbservice.service';



@Component({
  selector: 'app-homesearch',
  templateUrl: './homesearch.component.html',
  styleUrls: ['./homesearch.component.css']
})
export class HomesearchComponent implements OnInit {

  constructor(private r: Router, private route: ActivatedRoute, private dbs: DbserviceService) {

  }

  ngOnInit() {
    let value = parseInt(this.route.snapshot.paramMap.get('value'));
    // this.navvalue=value;
    console.log("cxame");
    this.homenav(value);
  }
  //navvalue:number;
  books: any[] = [];
  comedy: any[] = [];
  romance: any[] = [];
  sports: any[] = [];
  result: any[] = [];
  wishlisted = false;

  invalid() {
    if (this.wishlisted) {
      this.wishlisted = false;
    }
    else {
      this.wishlisted = true;
    }
    //alert("Login First to Add");
    // this.r.navigate(['login']);
  }

  homenav(value: number) {
    if (value == 1) {
      this.comedycollection();
    }
    else if (value == 2) {
      this.biographycollection();
    }
    else if (value == 3) {
      this.romancecollection();
    }
    else if (value == 4) {
      this.sportscollection();
      console.log(value);
    }
    else {
      this.all();
      console.log(value);
    }
    console.log(value);
    // this.navigatecheck();
    //this.r.navigate(['homesearch']);
  }
  comedycollection() {
    this.result = [];
    this.dbs.getJSON('./assets/widgets.json').subscribe(data => {
      this.result = data;
    });
    console.log("Comedy Called");

  }

  biographycollection() {

    this.dbs.getJSON('./assets/widgets.json').subscribe(data => {
      this.result = data;
    });
    console.log("biography Called");
    console.log(this.result);
  }

  sportscollection() {
    this.result = [];
    console.log("Sports Called");
  }
  romancecollection() {
    this.result = [];
    console.log("Romance Called");
    for (var i = 0; i < this.books.length; i++) {
      let obj = this.books[i];
      if (obj.genre == 'Romance') {
        console.log(JSON.stringify(obj));
        this.result.push(obj);
      }

    }
  }
  all() {
    this.result = [];
    for (var i = 0; i < this.books.length; i++) {
      console.log("Working");
      console.log(this.books.length);
      let obj = this.books[i];
      this.result.push(obj);

    }
  }

  comedycollection2() {
    for (var i = 0; i < this.books.length; i++) {
      console.log("Working");
      console.log(this.books.length);
      let obj = this.books[i];
      if (obj.genre == 'Romance') {
        console.log(JSON.stringify(obj));
      }

    }
  }

}
