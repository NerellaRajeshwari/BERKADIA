import { Component, OnInit } from '@angular/core';
import {Student } from '../models/student.model';
import { StudentService} from './student.service';
@Component({

  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[];
  constructor(private _studentService: StudentService) { }
  
  ngOnInit() {
    this.students = this._studentService.getStudents();
  }
}
