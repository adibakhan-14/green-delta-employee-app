import { Employee } from '../employee/models/employee.model';
import * as EmployeeActions from '../actions/employee.actions';
import { Action } from '@ngrx/store';

export interface EmployeeState {
  readonly employee: Employee[];
}

const initialState: Employee = {
  first: 'Adiba',
  last: 'Khan',
  dob: '1/1/1',
  gender: 'Female',
  phone: '01111111111',
  skill: 'any',
  exp: 'any',
  levelExp: 'any',
};

export function reducer(
  state: Employee[],
  action: EmployeeActions.AddEmployee
) {
  switch (action.type) {
    case EmployeeActions.ADD_EMPLOYEE:
      return [...state, action.payload];

    default:
      return state;
  }
}
