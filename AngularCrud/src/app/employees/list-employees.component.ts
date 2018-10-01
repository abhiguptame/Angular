import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] =[
    {
      id: 1,
      name: 'Mark',
      gender:'Male',
      contactPreference: 'Email',
      email: 'mark@example.com',
      dateOfBirth: new Date('10/25/1988'),
      department:'IT',
      isActive:true,
      photoPath:'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender:'Female',
      contactPreference: 'phone',
      phoneNumber: 234567890,
      dateOfBirth: new Date('11/20/1989'),
      department:'IT',
      isActive:true,
      photoPath:'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender:'Male',
      contactPreference: 'Email',
      email: 'john@example.com',
      dateOfBirth: new Date('3/25/1976'),
      department:'IT',
      isActive:false,
      photoPath:'assets/images/john.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
