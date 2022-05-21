import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmployeeState } from '../../state/app.state';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  results: any;
  data: any;
  employees: Observable<Employee[]>;

  constructor( public dialog: MatDialog,
    private store: Store<EmployeeState>,
    private route: ActivatedRoute) {
      this.employees = store.select('employee');
    }

  ngOnInit(): void {

    this.data = JSON.parse(localStorage.getItem('form-data') || '[]');


  }
  displayedColumns: string[] = ['first','last', 'dob','gender', 'phone', 'skill', 'exp', 'levelExp'];


  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.results.filter = filterValue.trim().toLowerCase();
  }

  addEmployee(){
    const dialogRef = this.dialog.open(EmployeeAddComponent, {
      width: '730px',
      height: '550px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });

  }

}
