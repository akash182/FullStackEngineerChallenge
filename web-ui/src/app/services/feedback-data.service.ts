import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackDataService {
  getAllFeedbacks(user: any) {
    return [{
      empName : 'Vito Corleone',
    },{
      empName : 'Sonny Corleone',
    },{
      empName : 'Fredo Corleone',
    },{
      empName : 'Michael Corleone',
    },{
      empName : 'Tom Hagen',
    },{
      empName : 'Peter Clemenza',
    }];
  }

  constructor() { }
}
