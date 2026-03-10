import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../serviceNew/student-service';
//import { StudentList } from '../student-list/student-list';   // ✅ add
//import { StudentData } from '../student-data/student-data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-service-pratice',
  standalone: true,
  imports: [
    FormsModule,
    //StudentList, // ✅ important
    //StudentData // ✅ important
    RouterLink
    
],
  templateUrl: './service-pratice.html'
})
export class ServicePratice {

  name = '';
  location = '';
  role = '';

  constructor(private studentService: StudentService) {}

  Savedata() {
    const student = {
      name: this.name,
      location: this.location,
      role: this.role
    };

    this.studentService.addStudent(student);

    //this.name = '';
    //this.location = '';
    //this.role = '';
  }
}