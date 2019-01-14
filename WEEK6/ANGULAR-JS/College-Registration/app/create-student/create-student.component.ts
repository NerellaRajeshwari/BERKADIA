import { Component, OnInit } from '@angular/core';
import {Student } from '../models/student.model';
import { StudentService} from './student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  previewPhoto=false;
  student: Student={
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null,
  };

  constructor(private _stuService: StudentService,
    private _router: Router) { }
togglePhotoPreview(){
  this.previewPhoto=!this.previewPhoto;
}
  ngOnInit() {
  }
  saveStudent(): void {
    this._stuService.save(this.student);
    this._router.navigate(['list']);
  }
  
}
