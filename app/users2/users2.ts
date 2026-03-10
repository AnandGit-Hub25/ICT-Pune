import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-users2',
  imports: [],
  templateUrl: './users2.html',
  styleUrl: './users2.css',
})
export class Users2 {
  @Output() getUsers = new EventEmitter<string[]>();

  users: string[] = ['Anand', 'Rahul', 'Priya'];

  sendUsers() {
    this.getUsers.emit(this.users); 
  }
}
