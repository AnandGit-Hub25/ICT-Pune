import { Component } from '@angular/core';
import { User } from '../service/user';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
    users: string[];

    constructor(private user:User){
      this.users=this.user.getUsers();
    }

}
