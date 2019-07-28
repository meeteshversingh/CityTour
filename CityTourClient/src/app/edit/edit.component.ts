import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  fname ;
  lname;
  password;
  Username;
  phone;
  city;
  age;
  cpassword;
  
  constructor(private r : Router) { }

  ngOnInit() {
    this.fname="priyanka";
    this.lname="singhal";
    this.password= "priya";
    this.cpassword = "priya";
  this.Username = "priya";
  this.phone = 14673338;
  this.city="Bangalore";
  this.age = 28;

  }
  Edit()
  {

    this.r.navigate(['Savedplans']);
  }

  


}
