import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ ContactUSComponent } from './ContactUS/ContactUS.component'
import {AboutComponent} from './About/About.component'
import { BrowserModule } from '@angular/platform-browser';
import {HomeComponent} from './home/home.component'
import { ProcessComponent } from './Process/Process.component';
const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'home'},
  {
    component:HomeComponent,
    path:"home"
  },
  {
    component:AboutComponent,
    path:"about"
  },
  {
    component:ProcessComponent,
    path:"process"
  },
{
  component:ContactUSComponent,
  path:"contact"
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
