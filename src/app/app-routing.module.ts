import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomesearchComponent } from './homesearch/homesearch.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HelpComponent } from './useraccount/help/help.component';
import { OrderdetailsComponent } from './useraccount/orderdetails/orderdetails.component';
import { OrderlistComponent } from './useraccount/orderlist/orderlist.component';
import { UserprofileComponent } from './useraccount/userprofile/userprofile.component';
import { WishlistComponent } from './useraccount/wishlist/wishlist.component';

const routes: Routes = [{ path: '', pathMatch: 'full', component: HomepageComponent },
{ path: 'about', component: AboutComponent },
{ path: 'login', component: LoginpageComponent },
{ path: 'contact', component: ContactusComponent },
{ path: 'help', component: HelpComponent },
{ path: 'orderdetails', component: OrderdetailsComponent },
{ path: 'orderlist', component: OrderlistComponent },
{ path: 'userprofile', component: UserprofileComponent },
{ path: 'wishlist', component: WishlistComponent },
{ path: 'homesearch/:value', component: HomesearchComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
