import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {
  message="hello Anand Manthalkar";

  constructor(){}

  getmessage(){
    return this.message;
  }

  
    

}
