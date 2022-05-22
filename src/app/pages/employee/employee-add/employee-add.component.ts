import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsyncService } from 'src/app/shared/services/async.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { EmployeeState } from '../../state/app.state';
import { Employee } from '../models/employee.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as EmployeeActions from './../../actions/employee.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  formId = 'employeeForm';
  basicInfo: FormGroup;
  skillInfo: FormGroup;
  selectedIndex: number= 0;

  basic: any=[];


  // basicInfoForm: FormGroup;
  // isLinear = true;

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    public asyncService: AsyncService,
    private store: Store<EmployeeState>,
    private router: Router
    // private skillStore: Store<SkillState>
  ) {

  }

  ngOnInit(): void {
    this.basicInfo = this.fb.group({
      phone:['',[Validators.required, Validators.pattern('^((\\+88-?)|0)?[0-9]{11}$')]],
      first:['',[Validators.required]],
      last:['',[Validators.required]],
      dob:['',[Validators.required]],
      gender:['',[Validators.required]],


    });

    this.skillInfo =this.fb.group({
      skill:['',[Validators.required]],
      exp:['',[Validators.required]],
      levelExp:['',[Validators.required]]
    })
  }

  get phone() {
    return this.basicInfo.get('phone');
  }
  get first() {
    return this.basicInfo.get('first');
  }
  get last() {
    return this.basicInfo.get('last');
  }
  get dob() {
    return this.basicInfo.get('dob');
  }
  get gender() {
    return this.basicInfo.get('gender');
  }
  get skill() {
    return this.skillInfo.get('skill');
  }
  get exp() {
    return this.skillInfo.get('exp');
  }
  get levelExp() {
    return this.skillInfo.get('levelExp');
  }

  // basicInfoAdd(first: string, last: string, dob:string, gender:string, phone:string, skill: string, exp:string, levelExp: string){
  //   this.store.dispatch(new EmployeeActions.AddEmployee({
  //     first: first,
  //     last: last,
  //     dob: dob,
  //     gender: gender,
  //     phone: phone,
  //     skill: skill,
  //     levelExp: levelExp,
  //     exp: exp
  //   }))
  //   if (this.selectedIndex != 3) {
  //     this.selectedIndex = this.selectedIndex + 1;
  //   }
  // }
  next(){
    console.log(this.basicInfo.value);

    if (this.selectedIndex != 3) {
      this.selectedIndex = this.selectedIndex + 1;
    }
    console.log(this.selectedIndex);
  }

  // skillInfoAdd(skill: string, exp:string, levelExp: string){
  //   this.skillStore.dispatch(new SkillActions.AddSkill({
  //     skill: skill,
  //     exp: exp,
  //     levelExp: levelExp,

  //   }))
    // if (this.selectedIndex != 3) {
    //   this.selectedIndex = this.selectedIndex + 1;
    // }
  //}

  previous() {
    if (this.selectedIndex != 0) {
      this.selectedIndex = this.selectedIndex - 1;
    }
    console.log(this.selectedIndex);
  }

  submit(){

    console.log(this.skillInfo.value);
    console.log(this.basicInfo.value);

    const basicObj= this.basicInfo.value;
    const skillObj= this.skillInfo.value;

    const finalObj= {...basicObj, ...skillObj}
    this.basic.push(finalObj)


    localStorage.setItem('form-data', JSON.stringify( this.basic));

    this.router.navigate(['/']);
  }

}
