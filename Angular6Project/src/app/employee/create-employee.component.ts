import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['Abhishek Kumar Gupta'],
      email: ['abhiguptame@gmail.com'],
      skills: this.fb.group({
        skillName: ['C#'],
        experienceInYears: ['2.1'],
        proficiency: ['intermediate']
      })
    });
  }

  onSubmit(): void{
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.touched);
    console.log(this.employeeForm.controls.fullName.touched);
    console.log(this.employeeForm.get('fullName').value);
  }

  onLoadDataClick(): void{
    this.employeeForm.setValue({
      fullName: 'Abhishek Kumar Gupta',
      email: 'abhiguptame@gmail.com',
      skills:{
        skillName: '.NET',
        experienceInYears: '2.1',
        proficiency: 'intermediate'
      }
    });
  }

  onLoadNameAndEmailClick(): void{
    this.employeeForm.patchValue({
      fullName: 'Abhishek Kumar Gupta',
      email: 'abhiguptame@gmail.com'
    });
  }
}
