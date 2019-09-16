import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageUserComponent } from './manage-user/manage-user.component';

const routes: Routes = [{ path : 'home',component : HomeComponent},{ path : 'manage_user', component : ManageUserComponent},{path: 'login', component : LoginComponent },{path: '', redirectTo: 'login', pathMatch : 'full'},{path: '**', redirectTo: 'home',pathMatch : 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
