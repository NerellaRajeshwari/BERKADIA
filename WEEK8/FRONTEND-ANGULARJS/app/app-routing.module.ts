import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import {SpecialEventsComponent} from './special-events/special-events.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent } from './register/register.component';
import {AuthGuard} from './auth.guard';
import {HomeComponent} from './home/home.component';
import {  BookingComponent} from './booking/booking.component';
import {EndComponent} from './end/end.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path : 'events',
    component: EventsComponent
  },
  {
    path:'special',
    component:SpecialEventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent 
  },
  {
    path:'booking',
    component:  BookingComponent
  },
  {
    path:'end',
    component:  EndComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
