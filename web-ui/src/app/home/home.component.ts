import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FeedbackDataService } from '../services/feedback-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  user: any;
  feedbacks:[]=[];
  constructor(private feedbackDataService: FeedbackDataService) { 
    this.feedbackDataService.awaitData().subscribe((user)=>{
      this.user=user;
    });

  }

  ngOnInit() {
    this.getAllFeedbacks(this.user);
  }

  getAllFeedbacks(user){
    this.feedbackDataService.getAllFeedbacks(user).subscribe((data)=>{
      this.feedbacks=data as [];
    })

  }

}
