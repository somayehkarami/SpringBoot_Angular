import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    // this.employeeService.getEmployeesList().subscribe((data) => {
    //   console.log('got data', data);
    //   this.employees = data;
    // });

    this.employeeService.getEmployeesList().subscribe((response) => {
      this.employees = response;
    });
  }
}
