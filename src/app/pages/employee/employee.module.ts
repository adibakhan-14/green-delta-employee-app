import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../reducer/employee.reducer';
import { PagesComponent } from '../pages.component';
import { HomeComponent } from '../home/home.component';
import { EmployeeResolver } from './employee.resolver';

export const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'employee/list',
    component: EmployeeListComponent,
    pathMatch: 'full',
    resolve: {
      employeeData: EmployeeResolver,
    },
  },

  { path: 'employee/add', component: EmployeeAddComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [EmployeeAddComponent, EmployeeListComponent],
  imports: [
    MatDialogModule,
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule.forRoot(reducer),
  ],
  providers: [EmployeeResolver],
})
export class EmployeeModule {}
