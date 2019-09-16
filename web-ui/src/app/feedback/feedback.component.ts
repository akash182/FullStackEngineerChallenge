import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  @Input() feedback : Object;
  constructor() { }

  ngOnInit() {
  }
  ratingControl = new FormControl('');
  detailFbControl = new FormControl('');
   ratings=[{
                label : 'Excellent',
                value : '1'
                },{
                  label : 'Average',
                value : '2'
                },{
                  label : 'Poor',
                value : '3'
                }]

}
