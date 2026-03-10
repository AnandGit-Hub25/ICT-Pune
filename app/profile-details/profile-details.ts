import { Component } from '@angular/core';
import { SharedData } from '../shared-data';



@Component({
  selector: 'app-profile-details',
  imports: [],
  templateUrl: './profile-details.html',
  styleUrl: './profile-details.css',
})
export class ProfileDetails {
     dummyData:any;
    constructor(private SharedData:SharedData){
      this.dummyData=this.SharedData.userData
    }

  }
  