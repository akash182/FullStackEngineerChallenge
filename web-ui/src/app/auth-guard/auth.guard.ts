import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FeedbackDataService } from '../services/feedback-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private fbService : FeedbackDataService,private router: Router){}
  isLoggedIn=false;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.fbService.isLoggedIn().subscribe((state)=>{
        this.isLoggedIn=state;
      })
      if(this.isLoggedIn){
        return true;
      }else{
        this.router.navigate(['login']);
      }
  }
  
}
