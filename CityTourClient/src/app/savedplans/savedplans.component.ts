import { Component, OnInit } from '@angular/core';
import { BasicserviceService } from '../basicservice.service';

@Component({
  selector: 'app-savedplans',
  templateUrl: './savedplans.component.html',
  styleUrls: ['./savedplans.component.css']
})
export class SavedplansComponent implements OnInit {
  list =[];
  constructor(private Basic : BasicserviceService) { 
    this.Basic.apiGet("fetchAllPlan?email="+sessionStorage.getItem("email"), (resp) => {
      console.log(resp);
      this.list = resp;
    })
  }

  ngOnInit() {
  }



}
