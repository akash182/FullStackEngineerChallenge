import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BASE_URL} from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackDataService {
  private user = new BehaviorSubject(undefined); ;
 private fetching: boolean;
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

  constructor(private http: HttpClient) { }
}
