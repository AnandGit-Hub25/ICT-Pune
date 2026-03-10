import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Master {
  master:string="Angular"
  constructor(){
    console.log("product service")
  }

  
}
