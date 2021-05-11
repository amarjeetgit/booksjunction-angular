import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomesearchComponent } from './homesearch/homesearch.component';

const routes: Routes = [{path:'',pathMatch:'full',component:HomepageComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactusComponent},
{path:'homesearch/:value',component:HomesearchComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
