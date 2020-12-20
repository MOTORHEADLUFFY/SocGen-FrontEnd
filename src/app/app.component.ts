import { Component } from '@angular/core';
import { Employee, Response } from '../structures';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  genders = ["M", "F", "T"];
  employeeData: Employee[];
  displayData: Employee[];
  searchBox = "";
  employeeForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    department: ['', Validators.required]
  });

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder){
  }

  ngOnInit(){
    this.createTable();
  }

  get f() { return this.employeeForm.controls; }

  createTable() {
    this.employeeService.getAllEmployees().subscribe((res: Employee[]) => {
      this.employeeData = res;
      this.displayData = res;
      this.displayData.sort( (a, b) => {
        if (a.id < b.id)
            return -1;
        if (a.id > b.id)
            return 1;
        return 0;
      })
    })
  }

  onSubmit(){
    let employee = this.employeeForm.value as Employee;
    this.employeeService.addEmployee(employee).subscribe((res: Response) => {
      if(res.responseCode === "0"){
        this.createTable();
        console.log(res);
      } else {
        alert(res.responseMessage);
      }
      this.employeeForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        department: ['', Validators.required]
      });
    })
  }

}
