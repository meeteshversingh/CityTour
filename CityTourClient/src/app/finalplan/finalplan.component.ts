import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicserviceService } from '../basicservice.service';

@Component({
  selector: 'app-finalplan',
  templateUrl: './finalplan.component.html',
  styleUrls: ['./finalplan.component.css']
})
export class FinalplanComponent implements OnInit {
  list: any;

  constructor(private router: Router, private api: BasicserviceService) {
    this.list = JSON.parse(sessionStorage.getItem('Data'));
    console.log(this.list);
  }

  ngOnInit() {
  }

  Submit() {

    //Submit list into database;
    console.log(this.list);
    var places = "";
    
    this.list.data.forEach(element => {
        places += element+", ";       
    });
    

    var data = {
      category: this.list.selectedValue,
      days: this.list.selectedValue1,
      date: this.list.date,
      places: places,
      hotel: this.list.selectedValue2,
      email_Id : sessionStorage.getItem("email")
    }
    //clear the session of data

    console.log("save the plan")
    console.log(data);
    this.api.apiPost("savePlan", data, (resp) => {
      console.log(resp);
      console.log("hello submit");
      sessionStorage.removeItem('Data');
      //navigate the page to Saved Plan
      this.router.navigateByUrl("Savedplans");
    })
  }
}
