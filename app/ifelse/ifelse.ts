import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  imports: [FormsModule],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.css',
})
export class Ifelse {
  isDiv1visible=false;
  isDiv2Visible=false;
  num1:string='';
  num2:string='';
  selectedStatus:string='';

  hide(){
    this.isDiv1visible=false
  }

  show(){
    this.isDiv1visible=true
  }
  toggleDiv(){
    this.isDiv2Visible=!this.isDiv2Visible;
  }

}


