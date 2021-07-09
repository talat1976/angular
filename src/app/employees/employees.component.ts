import { EmployeesService } from './employees.service';
import { Employee } from './models/Employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
   employees: Employee[] = []

   constructor(private employeesService: EmployeesService) { }

   ngOnInit(): void {
      this.getEmployees()
   }

   getEmployees(): void {
      this.employeesService.getEmployees().subscribe(employees => this.employees = employees)
   }

}
