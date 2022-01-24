import { Injectable, OnInit } from "@angular/core";
import { environment } from '../../environments/environment';

@Injectable()
export class UtilMethods implements OnInit {
    public env = environment;
    constructor() { }

    ngOnInit() {
    }


}