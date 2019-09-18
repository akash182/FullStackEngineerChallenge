import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageReviewsComponent } from './manage-reviews/manage-reviews.component';

import { AuthGuard } from './auth-guard/auth.guard';

const routes: Routes = [{path: 'home',component : HomeComponent, canActivate : [AuthGuard]},
                        {path: 'manage_user', component : ManageUserComponent, canActivate : [AuthGuard]},
                        {path: 'manage_review', component : ManageReviewsComponent, canActivate : [AuthGuard]},
                        {path: 'login', component : LoginComponent },
                        {path: '', redirectTo: 'home', pathMatch : 'full'},
                        {path: '**', redirectTo: 'home',pathMatch : 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
