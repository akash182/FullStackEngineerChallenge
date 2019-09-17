import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BASE_URL} from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackDataService {
  private user = new BehaviorSubject(undefined); 


  constructor(private http: HttpClient) { }

    private getUser() {
        return this.user.asObservable();
    }
    awaitData() {
        return this.getUser();
    }
    updateUser(user) {
            this.user.next(user);
    }

  getAllFeedbacks(user: any) {
    return this.http.get(BASE_URL+'/getpending_reviews/'+user.userid,);
  }

  authenticate(user : any){
    return this.http.post(BASE_URL+'/authenticate_user',{
           userid : user.userid,
           password : user.password
    });
  }

  getall_employees(user : any){
    return this.http.get(BASE_URL+'/getall_employees/'+user.userid);
  }

  add_employee(user : any){
    return this.http.post(BASE_URL+'/add_employee',{
       name : user.name,
       role : user.role,
       password : user.password
    });
  }
}
