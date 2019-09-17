import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['./add-employee-modal.component.scss']
})
export class AddEmployeeModalComponent implements OnInit {

  public employeeForm : FormGroup;
  public roles : String[]=['admin','employee'];
  isUpdate: boolean = false;
  constructor(public dialogRef: MatDialogRef<AddEmployeeModalComponent>, @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      name : new FormControl('',[Validators.required,Validators.maxLength(60)]),
      role : new FormControl('',[Validators.required,Validators.maxLength(60)]),
      password : new FormControl('',[Validators.required,Validators.maxLength(60)]),
    });
     if(this.data && this.data._user){
       this.isUpdate=true;
       this.employeeForm.setValue({
          name : this.data._user.name,
          role : this.data._user.role,
          password : '****NA*****'
       });
     }else{
       this.isUpdate=false;
     }
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
