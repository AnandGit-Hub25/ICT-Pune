import { Component } from '@angular/core';
import { Child3 } from "../child3/child3";

@Component({
  selector: 'app-parent3',
  imports: [Child3],
  templateUrl: './parent3.html',
  styleUrl: './parent3.css',
})
export class Parent3 {
   name="Anand Manthalkar";
}
