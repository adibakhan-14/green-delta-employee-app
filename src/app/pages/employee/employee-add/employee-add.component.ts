import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsyncService } from 'src/app/shared/services/async.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  formId = 'employeeForm';
  basicInfo: FormGroup;
  skillInfo: FormGroup;
  // basicInfoForm: FormGroup;
  isLinear = true;

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    public asyncService: AsyncService,
  ) { }

  ngOnInit(): void {
    this.basicInfo = this.fb.group({
      phone:['',[Validators.required]],
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


  submit(){

    console.log(this.skillInfo.value);
    console.log(this.basicInfo.value);


  }

}
