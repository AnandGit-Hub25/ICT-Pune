import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
})
export class Child2 {
  @Output() public childEvent=new EventEmitter();
  fireEvent(){
    this.childEvent.emit("Take the risk or lose the chance");
  }
}
