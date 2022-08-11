import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from 'src/app/Customers';
import { DbserviceService } from 'src/app/dbservice.service';
import { UtilMethods } from 'src/app/Utilities/util-methods';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(public util: UtilMethods, private dbService: DbserviceService) { }


}
