import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomesearchComponent } from './homesearch/homesearch.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './product-card/product-card.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserprofileComponent } from './useraccount/userprofile/userprofile.component';
import { OrderlistComponent } from './useraccount/orderlist/orderlist.component';
import { OrderdetailsComponent } from './useraccount/orderdetails/orderdetails.component';
import { WishlistComponent } from './useraccount/wishlist/wishlist.component';
import { HelpComponent } from './useraccount/help/help.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,HomepageComponent, HeaderComponent, FooterComponent,AboutComponent,ContactusComponent,HomesearchComponent, ProductCardComponent, LoginpageComponent, UserprofileComponent, OrderlistComponent, OrderdetailsComponent, WishlistComponent, HelpComponent, ProductdetailsComponent, CartdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
