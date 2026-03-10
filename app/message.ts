import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
 getMessage() {
    return 'Hello from MessageService';
  }
}
