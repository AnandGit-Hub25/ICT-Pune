import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  public selectedID:any;
  MyEmployees=[
    {"id":1, "name":"Anand"},
    {"id":2, "name":"Rohan"},
    {"id":3, "name":"Anil"},
    {"id":4, "name":"Dev"},
    {"id":5, "name":"Pranav"}


    


  ]
  constructor(private router: Router,private route:ActivatedRoute){}

  EmpClick(employee:any){
    this.router.navigate(['/app-employee-detail',employee.id])
  }
  ngOnInit(): void{
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id=params.get('id')
      this.selectedID=id;
    })
  }
  isSelected(employee:any){
    return  parseInt(employee.id) === parseInt(this.selectedID);
  }
}
