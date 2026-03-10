import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedData {
  userData={
      id:1,
      name:'john',
      userName:'john@123',
      email:'john@gmail.com'
    }
}
