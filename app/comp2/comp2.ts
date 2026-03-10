import { Component } from '@angular/core';
import { Numlist } from '../numlist';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.html',
  styleUrl: './comp2.css',
})
export class Comp2 {
  list1:number[]=[];
      constructor(private _numlist:Numlist){
        this.list1=_numlist.getlist();
  
      }
      addnumber(val:any){
        this._numlist.addnum(val);
        this.list1=this._numlist.getlist();
        
      }
}
