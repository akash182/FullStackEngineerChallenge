import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { ImportsModule } from './imports/imports.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { AddEmployeeModalComponent } from './manage-user/add-employee-modal/add-employee-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedbackComponent,
    UserProfileComponent,
    LoginComponent,
    ManageUserComponent,
    AddEmployeeModalComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ImportsModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [
    AddEmployeeModalComponent,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
