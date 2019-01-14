import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable()
export class StudentService {
    private listStudents: Student[] = [
        {
            id: 1,
            name: 'Rajee',
            gender: 'Female',
            contactPreference: 'Email',
            email: 'rajee14v@gmail.com',
            phoneNumber: 7777777777,
            dateOfBirth: new Date('12/14/1997'),
            department: 'CSE',
            isActive: true,
            photoPath: 'assets/images/rajee.png'
          },
          {
            id: 2,
            name: 'Chellam',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'murugan@gamil.com',
            phoneNumber: 7777777772,
            dateOfBirth: new Date('11/22/1997'),
            department: 'ECE',
            isActive: true,
            photoPath: 'assets/images/chellam.png'
          },
          {
            id: 3,
            name: 'Darshan',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'chinoda@gmail.com',
            phoneNumber: 7777777778,
            dateOfBirth: new Date('10/26/1994'),
            department: 'ECE',
            isActive: true,
            photoPath: 'assets/images/darshan.jpg'
          },
          {
            id: 4,
            name: 'Krishna',
            gender: 'Female',
            contactPreference: 'Email',
            email: 'veni@gmail.com',
            phoneNumber: 7777777767,
            dateOfBirth: new Date('01/01/1998'),
            department: 'CSE',
            isActive: true,
            photoPath: 'assets/images/krishna.jpg'
          },
          {
            id: 5,
            name: 'Vishwa',
            gender: 'Female',
            contactPreference: 'Email',
            email: 'vishwa@gmail.com',
            phoneNumber: 7777777277,
            dateOfBirth: new Date('02/15/1997'),
            department: 'IT',
            isActive: true,
            photoPath: 'assets/images/vishwa.jpg'
          },
    ];

    getStudents(): Student[] {
        return this.listStudents;
 
    }

    save(student: Student ) {
        this.listStudents.push(student);
    } 
    
}
