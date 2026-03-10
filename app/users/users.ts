import { Component, Input, input} from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  @Input() user:string=''
}
