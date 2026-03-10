import { Component, OnInit } from '@angular/core';
import { StudentService } from '../serviceNew/student-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-data',
  imports: [CommonModule],
  templateUrl: './student-data.html',
  styleUrl: './student-data.css',
  
})
export class StudentData implements OnInit {
  //name = '';
  //role = '';
  //location = '';
//StudentService: any;
   students: any[] = [];

  constructor(private studentService: StudentService) {}

  // saveData() {

  //   const student = {
  //     name: this.name,
  //     role: this.role,
  //     location: this.location
  //   };

  //   this.studentService.addStudent(student);

  //   this.name = '';
  //   this.role = '';
  //   this.location = '';
    
  // }
   ngOnInit() {
    this.students = this.studentService.getStudents();
    console.log(this.students)
  }
  

}
