import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FeedbackDataService } from  '../services/feedback-data.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource([]);
  user;
  empList: []=[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private fbService : FeedbackDataService){
  this.fbService.awaitData().subscribe((user)=>{
    this.user= user;
  });
  }

  ngOnInit() {
    this.fbService.getall_employees(this.user).subscribe((data)=>{
          this.empList = data as [];
          this.dataSource.data=this.empList;
          console.log(this.empList);
    });
    this.dataSource.paginator = this.paginator;
  }
}
