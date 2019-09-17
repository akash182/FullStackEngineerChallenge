import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FeedbackDataService } from  '../services/feedback-data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddEmployeeModalComponent } from './add-employee-modal/add-employee-modal.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','action'];
  dataSource = new MatTableDataSource([]);
  user;
  empList: []=[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private fbService : FeedbackDataService, public dialog: MatDialog, private _snackBar : MatSnackBar){
  this.fbService.awaitData().subscribe((user)=>{
    this.user= user;
  });
  }

  ngOnInit() {
    this.fbService.getall_employees(this.user).subscribe((data)=>{
          this.empList = data as [];
          this.dataSource.data=this.empList;
    });
    this.dataSource.paginator = this.paginator;
  }

  addEmployee(){
    const dialogRef = this.dialog.open(AddEmployeeModalComponent, {
      width: '30vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fbService.add_employee(result).subscribe((d)=>{
        this._snackBar.open("Employee added successfully!", '',{
          duration: 3 * 1000,
        });
      });
    });
  }
  
}
