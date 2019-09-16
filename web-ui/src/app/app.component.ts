import { Component, OnInit } from '@angular/core';
import { FeedbackDataService } from './services/feedback-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'web-ui';
  user;
  constructor(private fbDataService : FeedbackDataService){

  }
  ngOnInit(){
    this.fbDataService.awaitData().subscribe(user =>{
      this.user=user;
    });
  }
}
