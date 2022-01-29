import { Injectable, OnInit } from "@angular/core";
import { environment } from '../../environments/environment';
import { Customers } from "../Customers";

@Injectable({
    providedIn: 'root' // just before your class
})
export class UtilMethods implements OnInit {
    public env = environment;
    currentUserInfo: Customers;
    loggedin: boolean;
    constructor() { }

    ngOnInit() {
    }

    checkdata() {
        let cUser = sessionStorage.getItem('user');
        if (cUser) {
            let currentUser: Customers = JSON.parse(cUser);
            this.currentUserInfo = currentUser;
            this.loggedin = true;
        }

    }
}