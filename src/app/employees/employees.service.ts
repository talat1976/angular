import { Employee } from './models/Employee';
import { Observable, of } from 'rxjs';
import { EMPLOYEES } from './models/dummy-data-employees';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

   getEmployees(): Observable<Employee[]> {
      return of(EMPLOYEES)
   }

   getEmployeeById(id: string): Observable<Employee> {
      const employee = EMPLOYEES.find(t => t.id === id)

      if(employee) {
         return of(employee)
      }

      return of(new Employee("", "", 0, "", "", "", 0, 0))
   }
}
