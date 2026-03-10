import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-structural-direc',
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-direc.html',
  styleUrl: './structural-direc.css',
})
export class StructuralDirec {
    isDiv1Visible=true;
    isDiv2Visible=true;

    num1='';
    num2='';
    isActive=true;
    selectedState='';

    

    
    cityArray :string[]=['pune','olkata','Mumbai','delhi'];

    

    studentList: any [] = [
      {studId:11, name:'AAA', city:'Pune', isActive: false},
      {studId:12, name:'BBB', city:'Mumbai', isActive: false},
      {studId:13, name:'CCC', city:'Nagpur', isActive: true},
      {studId:14, name:'DDD', city:'Jalgao', isActive: false},
      {studId:15, name:'EEE', city:'Thane', isActive: false},
      

    ]
     
    

    
    showdiv(){
      this.isDiv1Visible=true
    }

    hidediv(){
      this.isDiv1Visible=false
    }
    toggleDiv2(){
      this.isDiv2Visible = !this.isDiv2Visible;
    }
   

}
