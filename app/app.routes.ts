import { Routes } from '@angular/router';
import { Employee } from './employee/employee';
import { Databinding } from './databinding/databinding';
import { StructuralDirec } from './directive/structural-direc/structural-direc';
import { AttributesDirec } from './directive/attributes-direc/attributes-direc';
import { Ifelse } from './ifelse/ifelse';
import { ForSwitch } from './for-switch/for-switch';
import { ProfileDetails } from './profile-details/profile-details';

import { ProductList } from './product-list/product-list';
import { Child } from './child/child';
import { Template } from './template/template';
import { OperatorForm } from './operator-form/operator-form';
import { ServicePratice } from './service-pratice/service-pratice';

import { Home } from './home/home';
import { About2 } from './about2/about2';
import { Contact2 } from './contact2/contact2';
import { Routing } from './routing/routing';
import { PagenotFound } from './pagenot-found/pagenot-found';
import { EmployeeList } from './employee-list/employee-list';
import { EmployeeDetail } from './employee-detail/employee-detail';
import { Product } from './service/product';
import { ProductMain } from './product-main/product-main';
import { Tshirts } from './tshirts/tshirts';
import { Trosers } from './trosers/trosers';
import { Courses } from './courses/courses';
import { CoursesDetails } from './courses-details/courses-details';
import { Child3 } from './child3/child3';
import { Parent3 } from './parent3/parent3';
import { StudentList } from './student-list/student-list';






export const routes: Routes = [ {
      path:'add-emp',
      component: Employee
    },
    {
      path: 'data-binding',
      component: Databinding
    },
    {
      path: 'structural-direc',
      component:StructuralDirec
    },
    {
      path:'attributes-direc',
      component: AttributesDirec
    },
    {
      path: 'if-else',
      component: Ifelse
    },
    {
      path: 'app-for-switch',
      component:ForSwitch
    },
    {
      path: 'app-profile-details',
      component:ProfileDetails

    },
    {path:'app-product-list',
    component:ProductList
    },
    {
        path:'app-child',
        component:Child
    }, 
    {
      path:'app-template',
      component:Template
    },
    {
      path:'app-operator-form',
      component:OperatorForm
    },
    {
      path:'app-service-pratice',
      component:ServicePratice,
    },
    { path: 'app-routing', 
      component:Routing
     },
     
     {
      path:'',
      redirectTo:'/app-home',pathMatch:"full"
     },


    { path: 'app-home', 
      component:Home,
      
     },
     { path: 'app-product-main', 
      component:ProductMain,
      children:[
        {path:'tshirts',component:Tshirts},
        {path:'trousers',component:Trosers}
      ]
    },

      { path: 'app-about2', 
      component:About2 
    },
   


    { path: 'app-contact2', 
      component:Contact2
     },
{
      path:'Courses',
      component:Courses
     },
      {
      path: 'course-details',
      outlet:'Course_details',
      component: CoursesDetails
      
     },

     
 {
      path:'app-employee-list',
      component:EmployeeList
     },
     {
      path:'app-employee-detail/:id',
      component:EmployeeDetail
     },
      {
      path:'app-parent3',
      component:Parent3
     },
      {
      path:'app-child3',
      component:Child3
     },
     {
      path:'app-student-list',
      component:StudentList
     },
     {
      path:'**',
      component:PagenotFound
     }
     
   


 


     
   

     


   

   ];

