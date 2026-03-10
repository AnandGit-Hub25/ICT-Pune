import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-switch',
  imports: [FormsModule],
  templateUrl: './for-switch.html',
  styleUrl: './for-switch.css',
})
export class ForSwitch {
  cityArray: string[]=['Pune','Mumbai','Kolkatta','Delhi','Surat','Nanded']
  dayNumber: string='';
  studentList: any[]=[
    {studId:10,name:'AAA',city:'Pune',isActive:false},
    {studId:11,name:'BBB',city:'Munbai',isActive:true},
    {studId:12,name:'CCC',city:'Kolkatta',isActive:false},
    {studId:13,name:'DDD',city:'Delhi',isActive:true},
    {studId:14,name:'EEE',city:'Surat',isActive:false},
    {studId:15,name:'FFF',city:'Nanded',isActive:true}
  ]
}
