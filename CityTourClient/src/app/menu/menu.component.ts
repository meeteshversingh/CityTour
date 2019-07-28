import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicserviceService } from '../basicservice.service';
import { ViewfeedbacksComponent } from '../viewfeedbacks/viewfeedbacks.component';
import { ViewusersComponent } from '../viewusers/viewusers.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user = "none";


  constructor(private r : Router,
    private ser : BasicserviceService,private fdb:ViewfeedbacksComponent,private usr:ViewusersComponent) { }

  ngOnInit() {
    this.ser.currentLogged.subscribe(value=> {
      this.user = value;
    });
  }
  logout() {
   { sessionStorage.clear();
    this.user = 'none';
     this.r.navigate(['/Home']);}
  }
  onselectingFeedback(){
    this.fdb.ngOnInit();
  }
  onSelectingUser(){
    this.usr.ngOnInit();
  }
}
