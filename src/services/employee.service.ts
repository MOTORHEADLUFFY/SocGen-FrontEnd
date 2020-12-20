import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, Response } from '../structures';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../Endpoints';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee [] >(Endpoints.GET_ALL_EMPLOYEES);
  }

  addEmployee(employee: Employee): Observable<Response> {
    return this.http.post<Response>(Endpoints.ADD_EMPLOYEE, employee);
  }
}
