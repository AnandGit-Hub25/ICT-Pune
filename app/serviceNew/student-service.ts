import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  

  
   students: any[] = [];

  addStudent(student: any) {
    console.log(student)
    this.students.push(student);
    console.log(this.students)
  }

  getStudents() {
    console.log(this.students)
    return this.students;
  }

} 


