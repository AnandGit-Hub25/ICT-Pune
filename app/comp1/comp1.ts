import { Component } from '@angular/core';
import { Numlist } from '../numlist';

@Component({
  selector: 'app-comp1',
  imports: [],
  templateUrl: './comp1.html',
  styleUrl: './comp1.css',
  
})
export class Comp1 {

    list1:number[]=[];
    constructor(private _numlist:Numlist){
      this.list1=_numlist.getlist();

    }
    addnumber(val:any){
      this._numlist.addnum(val);
      this.list1=this._numlist.getlist();
    }


}
