import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import { FeedbackDataService } from '../services/feedback-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user : any;
  constructor(private router: Router, private fbservice:FeedbackDataService) { }

  ngOnInit() {
  }

  userIdControl = new FormControl('', [
    Validators.required,
  ]);
  pwdControl = new FormControl('', [
    Validators.required,
  ]);


  login() : boolean{ 
    let flag=false;
    this.fbservice.authenticate({
         userid : this.userIdControl.value,
         password : this.pwdControl.value
         }).subscribe((data)=>{
     this.user= data[0]; 
     this.fbservice.updateUser(this.user);
     this.fbservice.updateLoginState(true);
     this.router.navigate(['home']);   
         flag=true;  
    },(err)=>{
    });
    return flag;
  }
}
