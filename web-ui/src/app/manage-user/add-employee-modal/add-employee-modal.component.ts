import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['./add-employee-modal.component.scss']
})
export class AddEmployeeModalComponent implements OnInit {

  public employeeForm : FormGroup;
  public roles : String[]=['admin','employee'];
  constructor(public dialogRef: MatDialogRef<AddEmployeeModalComponent>) { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      name : new FormControl('',[Validators.required,Validators.maxLength(60)]),
      role : new FormControl('',[Validators.required,Validators.maxLength(60)]),
      password : new FormControl('',[Validators.required,Validators.maxLength(60)]),
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.employeeForm.controls[controlName].hasError(errorName);
  }

  addEmployee(empData){
    if(this.employeeForm.valid){
       this.dialogRef.close(empData);
    }
  }
}
