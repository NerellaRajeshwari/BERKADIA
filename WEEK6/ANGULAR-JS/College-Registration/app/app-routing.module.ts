import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student/student-list.component';
import { CreateStudentComponent } from './student/create-student.component';
import {DashboardComponent } from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';


const appRoutes: Routes = [
  { path: 'list', component: StudentListComponent },
  { path: 'register', component: CreateStudentComponent },
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'home', component: HomeComponent  },
  { path: 'dashboard', component: DashboardComponent  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
@NgModule({
    imports: [ RouterModule.forRoot( appRoutes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
