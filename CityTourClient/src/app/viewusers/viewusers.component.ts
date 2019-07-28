import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { BasicserviceService } from '../basicservice.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {

  constructor(private ser:BasicserviceService, usr:User) { }

  userlist = [];
  result;
  ngOnInit() {
    this.ser.apiGet('selectallusers' , (resp) => {
      console.log(resp);
      this.userlist=resp;
      this.result=JSON.stringify(resp);
    })
  }

}
