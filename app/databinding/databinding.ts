import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  imports: [],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
   courseName="Angular 18";
   inputType="checkbox";
   myClassName="bg-primary";
   name="Ayantika";

   rollNo=123;
   
   constructor(){
    
   }

   showAlert(message:string){
    alert(message)
   }
}
