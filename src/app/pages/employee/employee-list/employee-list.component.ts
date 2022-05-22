import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { EmployeeState } from '../../state/app.state';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  results: any;
  data: any;
  employees: Observable<Employee[]>;
  employeeSub: Subscription;
  employeeData: any[] = [];

  resultEmp: any;

  constructor(
    public dialog: MatDialog,
    private store: Store<EmployeeState>,
    private route: ActivatedRoute,
    public employeeService: EmployeeService,
  ) {
    this.employees = store.select('employee');
  }

  ngOnInit(): void {
    // this.employeeSub = this.employeeService.getEmployee().subscribe((data) => {
    //   if (data && data.length) {
    //     this.employeeData = data;
    //     console.log(this.employeeData, 'this.employeeDatathis.employeeData');
    //   }
    // });
    this.resultEmp= this.route.snapshot.data;
    this.employeeData= this.resultEmp.employeeData
    console.log(this.resultEmp, "this.resultEmpthis.resultEmp");
    console.log(this.employeeData, "this.employeeDatathis.employeeData");




    this.data = JSON.parse(localStorage.getItem('form-data') || '[]');
  }
  displayedColumns: string[] = [
    'id',
    'employee_name',
    'employee_salary',
    'employee_age',

  ];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.results.filter = filterValue.trim().toLowerCase();
  }

  addEmployee() {
    const dialogRef = this.dialog.open(EmployeeAddComponent, {
      width: '730px',
      height: '550px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
