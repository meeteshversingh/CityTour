import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createplan',
  templateUrl: './createplan.component.html',
  styleUrls: ['./createplan.component.css']
})
export class CreateplanComponent implements OnInit {

  constructor(private r : Router) {
    this.r.navigateByUrl("Home");
   }

  ngOnInit() {
    
  }

}
