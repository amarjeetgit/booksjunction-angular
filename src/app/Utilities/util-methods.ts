import { Injectable, OnInit } from "@angular/core";
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root' // just before your class
})
export class UtilMethods implements OnInit {
    public env = environment;
    constructor() { }

    ngOnInit() {
    }


}