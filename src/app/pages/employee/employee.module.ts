import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
export const routes = [
  { path: '', component: EmployeeListComponent, pathMatch: 'full' },
  { path: 'employee/list', component: EmployeeListComponent, pathMatch: 'full' },
  { path: 'employee/add', component: EmployeeAddComponent, pathMatch: 'full' },
];


@NgModule({
  declarations: [
    EmployeeAddComponent,
    EmployeeListComponent
  ],
  imports: [
    MatDialogModule,
    RouterModule.forChild(routes), SharedModule
  ]
})
export class EmployeeModule { }
