import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Child2 } from '../child2/child2';
import { Child } from "../child/child";



@Component({
  selector: 'app-product-list',
  imports: [Child2, CommonModule, Child],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  public msg='';
  name="Anand Manthalkar";
  Fruits=["Apple","Banana","Mango","Grapes"];
  Obj={
    name:"Anand",
    Age:"26",
    isMarried:true
  }
  userData = {
    name: "Anand",
    experience: 3,
    role: "MES Analyst",
    department: "Manufacturing Systems"
  };
  changeData(){
    this.name="Rohan Chowdhury";
  }
}