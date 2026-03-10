
import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  
  @Input() myData:string='';
  @Input() myDataArray:string[]=[];
  @Input() myDataObject:any={};
  @Input() myDataObjectNew:any={};
}
