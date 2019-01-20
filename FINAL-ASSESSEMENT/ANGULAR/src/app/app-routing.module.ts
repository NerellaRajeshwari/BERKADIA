import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Question1Component} from './question1/question1.component';
import {LoginComponent} from './login/login.component';
import { LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch:'full'
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'q1',
    component: Question1Component
  },
  {
    path : 'logout',
    component: LogoutComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
