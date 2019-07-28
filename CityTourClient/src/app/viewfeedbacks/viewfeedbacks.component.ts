import { Component, OnInit } from '@angular/core';
import { Feedback } from "../feedback";
import { BasicserviceService } from '../basicservice.service';
@Component({
  selector: 'app-viewfeedbacks',
  templateUrl: './viewfeedbacks.component.html',
  styleUrls: ['./viewfeedbacks.component.css']

})
export class ViewfeedbacksComponent implements OnInit {

  constructor(private ser:BasicserviceService, fdb:Feedback) { }

  feedbacklist = [];
  result;
 
  ngOnInit() {
    
      this.ser.apiGet('selectFb' , (resp) => {
        console.log(resp);
        this.feedbacklist=resp;
        //this.result=JSON.stringify(resp);
      })
    }
  

  
}
