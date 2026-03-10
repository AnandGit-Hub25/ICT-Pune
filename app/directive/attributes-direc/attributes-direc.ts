import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-attributes-direc',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './attributes-direc.html',
  styleUrl: './attributes-direc.css',
})
export class AttributesDirec {
     div1BgColor='bg-primary';
     isDiv2Active=false;
     num1='';
     num2='';
     isActive:boolean=false;

     studentList: any [] = [
      {studId:11,gender: 'male', 'TotalMark':23,name:'AAA', city:'Pune', isActive: false},
      {studId:12,gender: 'male', 'TotalMark':89,name:'BBB', city:'Mumbai', isActive: false},
      {studId:13,gender: 'male', 'TotalMark':67,name:'CCC', city:'Nagpur', isActive: true},
      {studId:14,gender: 'male', 'TotalMark':90,name:'DDD', city:'Jalgao', isActive: false},
      {studId:15,gender: 'male', 'TotalMark':34,name:'EEE', city:'Thane', isActive: false},
      

    ]


    addRedColor(){
      this.div1BgColor="bg-danger"

    }

    addBlueColor(){
       this.div1BgColor="bg-primary"
    }
    toggleDiv2Class(){
      this.isDiv2Active =! this.isDiv2Active;
    }
}
