import { Component } from '@angular/core';
import { Master } from '../Services/master';


@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  
      constructor(private master:Master){

      }
}
