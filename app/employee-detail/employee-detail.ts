import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';




@Component({
  selector: 'app-employee-detail',
  imports: [],
  templateUrl: './employee-detail.html',
  styleUrl: './employee-detail.css',
})
export class EmployeeDetail implements OnInit {
  
  
 
 public EmpID:any;
 public EmpName:any;
  
  
 
 constructor(private route:ActivatedRoute, private router:Router){}
 

 
 ngOnInit(): void{
  //let id=this.route.snapshot.paramMap.get('id');
  
  //this.EmpID=id;
  this.route.paramMap.subscribe((params: ParamMap) => {
    let id =params.get('id');
    this.EmpID =id;
  })

  
 }
 PreviousEmp(){
  let prevoiusId = parseInt(this.EmpID) -1;
  this.router.navigate(['/app-employee-detail',prevoiusId]);

 }
 NextEmp(){
   let nextId = parseInt(this.EmpID) +1;
  this.router.navigate(['/app-employee-detail',nextId]);

 }
  goToEmployee(){
  let selectedId = this.EmpID;
  this.router.navigate(['/app-employee-list', {id: selectedId}]);
 }
}
