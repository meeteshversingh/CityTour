import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicserviceService } from '../basicservice.service';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {
  message :string;
  fname;
  lname;
  password;
  gender;
  username;
  phone;
  city;
  age;

  constructor(private r : Router, private service : BasicserviceService) {
    this.service.apiGet("selectUser?email="+sessionStorage.getItem("email"), (resp) =>
    {
      console.log(resp);
      this.fname = resp.first_Name;
      this.lname = resp.last_Name;
      this.gender = resp.gender;
      this.password = resp.password;
      this.age = resp.age;
      this.phone = resp.phone_No;
      this.username = resp.email_Id;
      this.city = resp.city;

    })
   }

  ngOnInit() {
  }
  Edit()
  {
    this.message = "Data has been updated";
    //this.r.navigate(['login']);
    var data = {
      age : this.age,
      city : this.city,
      email_Id :this.username,
      gender : this.gender,
      first_Name : this.fname,
      last_Name : this.lname,
      password : this.password,
      phone_No :  this.phone
    }
    this.service.apiPost("updateUser",  data,  (res) =>{
      console.log(res);
      alert("Details saved successfully");
    })
  }
}
