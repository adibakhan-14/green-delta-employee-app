// import { Employee } from "../employee/models/employee.modal";
// //import {Skill} from "../employee/models/employee";

// export interface EmpState {
//     readonly employeeStore: Employee[];

// }
import { Employee } from '../employee/models/employee.model';

export interface EmployeeState {
    readonly employee: Employee[];
}

// export interface SkillState{
//     readonly skillStore: Skill[];
// }