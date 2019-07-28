import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BasicserviceService } from '../basicservice.service';
import { supportsWebAnimations } from '@angular/animations/browser/src/render/web_animations/web_animations_driver';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  EmailId = new FormControl('');
  Contact = new FormControl('');
  Date = new FormControl(new Date());
  Comments = new FormControl('');
  
  constructor(private api : BasicserviceService) { }

  ngOnInit() {}
  
  submit() {
      console.log("hello submit");
      this.api.apiGet("insertFeedback?email=" + this.EmailId.value + "&contact=" + this.Contact.value + "&date=" + this.Date.value + "&comments=" +this.Comments.value ,(resp) => {
        console.log(resp);
       alert("Thanks for your feedback!");
        
      });
  
  }
}