import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


//MaterialComponent
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSelectModule} from '@angular/material/select';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SliderModule } from 'angular-image-slider';
import {MatInputModule} from '@angular/material';
import {MatOptionModule} from '@angular/material';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent, NgbdModalContent } from './login/login.component';
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
import { Location } from './location';
import { Feedback } from './feedback';
import { User } from './user';

import { JaipurComponent } from './jaipur/jaipur.component';

import { MumbaiComponent } from './mumbai/mumbai.component';
import { BangaloreComponent } from './bangalore/bangalore.component';








@NgModule({
    entryComponents : [
      NgbdModalContent
    ],

  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    ContactComponent,
    AdminComponent,
    LoginComponent,
    SavedplansComponent,
    EditplanComponent,
    AddplacesComponent,
    ViewplacesComponent,
    ViewusersComponent,
    ViewfeedbacksComponent,
    
    CreateplanComponent,
    DelhiComponent,
    EditdetailsComponent,
    FinalplanComponent,
    FeedbackComponent,
    NgbdModalContent,
    
    JaipurComponent,
    
   
    
    MumbaiComponent,
    
   
    
    BangaloreComponent,
    
   
    
  
   
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatOptionModule,
    BsDatepickerModule.forRoot(),
    MatCheckboxModule,
    NgbModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SliderModule,
    HttpClientModule,
   
  ],
  providers: [Location,Feedback,ViewfeedbacksComponent,ViewusersComponent,User],
  bootstrap: [AppComponent]
})
export class AppModule { }
