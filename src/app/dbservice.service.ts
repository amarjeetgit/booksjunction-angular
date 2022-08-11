import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './Books';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customers } from './Customers';


@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private con: HttpClient) { }

  url = 'http://localhost:8081';


  servicecallbyid(value: any): Observable<Books> {

    let link = "/book_id/" + value;
    return this.con.get<Books>(this.url + link);
  }


  public getJSON(url: string): Observable<any> {
    // this.startSpinner();
    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    const options = { headers: headers };

    return this.con.get(url, options);
  }

  setJson(url: string, body): Observable<any> {
    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    const options = { headers: headers };

    return this.con.put(url, body);
  }


  servicecallbynameandauthor(value: any): Observable<Books> {

    let link = "/bookbyname/" + value;
    return this.con.get<Books>(this.url + link);
  }

  servicecallforall(n: any) {
    let link = "/bookcat/" + n;
    return this.con.get<Books>(this.url + link);

  }

  //  addtocart(obj:Cart):Observable<Cart>
  //  {
  //   let link ="/addingcart";
  //   return this.con.put<Cart>((this.url+link),obj);
  //  }  


  fetchcart() {
    //  var n=sessionStorage.getItem("user");  
    // let link ="/fetchcart?x="+n;
    // return this.con.get<Cart>(this.url+link);
  }


  booksell(b: Books): Observable<Books> {
    let link = "/addingbook";
    return this.con.put<Books>((this.url + link), b);
  }


  addcust(c: Customers): Observable<Customers> {
    let link = "/addingcust";
    return this.con.put<Customers>((this.url + link), c);
  }

  login(mobile: any): Observable<Customers> {
    let link = "/fetchcust?x=" + mobile;
    return this.con.get<Customers>(this.url + link);
  }
  updateuser(user: any, m: Customers) {
    let link = "/updatecust/" + user;
    console.log(this.url + link);
    return this.con.put<Customers>((this.url + link), m);
  }

  deletecart(bkid, user) {
    //  console.log("called deleete");
    // let link ="/deletecart?x="+bkid+"&y="+user;
    // console.log(this.url+link);
    // return this.con.get<Cart>(this.url+link);
  }
}
