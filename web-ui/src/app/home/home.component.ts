import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FeedbackDataService } from '../services/feedback-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  feedbacks:[]=[];
  constructor(private feedbackDataService: FeedbackDataService) { }

  ngOnInit() {
    this.getAllFeedbacks('akash');
  }

  getAllFeedbacks(user){
    let feedbacksResponse=this.feedbackDataService.getAllFeedbacks(user) as [];
    if(feedbacksResponse && feedbacksResponse.length > 0){
      this.feedbacks.push(...feedbacksResponse);
    }

  }

}
