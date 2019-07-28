import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SavedplansComponent } from './savedplans/savedplans.component';

import { EditplanComponent } from './editplan/editplan.component';
import { AddplacesComponent } from './addplaces/addplaces.component';
import { ViewplacesComponent } from './viewplaces/viewplaces.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { ViewfeedbacksComponent } from './viewfeedbacks/viewfeedbacks.component';
import { CreateplanComponent } from './createplan/createplan.component';
import { DelhiComponent } from './delhi/delhi.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { FinalplanComponent } from './finalplan/finalplan.component';
import { FeedbackComponent } from './feedback/feedback.component';

import { JaipurComponent } from './jaipur/jaipur.component';

import { MumbaiComponent } from './mumbai/mumbai.component';
import { BangaloreComponent } from './bangalore/bangalore.component';







const routes: Routes = [
  { path: "Home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "Profile", component: ProfileComponent },
  {  path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent  },
  { path: "Admin", component: AdminComponent },
  { path: "Savedplans", component: SavedplansComponent },
  { path: "Editplan", component: EditplanComponent },
  { path: "Addplaces", component: AddplacesComponent },
  { path: "Viewplaces", component: ViewplacesComponent },
  { path: "Viewusers", component: ViewusersComponent },
  { path: "Viewfeedbacks", component: ViewfeedbacksComponent },
  { path: "Createplan", component: CreateplanComponent },
  { path: "Delhi", component: DelhiComponent },
  { path: "Editdetails", component: EditdetailsComponent },
  { path: "Finalplan", component: FinalplanComponent },
  { path: "Feedback", component: FeedbackComponent },
  { path: "Jaipur", component: JaipurComponent },
  
  { path: "Mumbai", component: MumbaiComponent },
  { path: "Bangalore", component: BangaloreComponent }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
