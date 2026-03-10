import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService} from '../serviceNew/student-service';
import { RouterOutlet } from "@angular/router";
import { ServicePratice } from "../service-pratice/service-pratice";


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './student-list.html'
})
export class StudentList implements OnInit {

  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }
}

