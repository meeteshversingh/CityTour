import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicserviceService } from '../basicservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  registration : FormGroup;
  
  constructor(private r: Router,private api : BasicserviceService) { }
  
  ngOnInit() {
    this.registration=   new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl(''),
      password: new FormControl(''),
      cpassword: new FormControl(''),
      gender: new FormControl('male'),
      username: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl(''),
      city: new FormControl(''),
      age: new FormControl('')
    });
  }

  Register() {
    this.api.apiGet("insertUser?firstname=" +this.registration.get('fname').value+ "&lastname=" +this.registration.get('lname').value+ "&email=" +this.registration.get('username').value+ "&password=" +this.registration.get('password').value+ "&gender=" +this.registration.get('gender').value+ "&phone=" +this.registration.get('phone').value+ "&city=" +this.registration.get('city').value+ "&age=" +this.registration.get('age').value , (resp) => {
      console.log(resp);
      console.log("Hello new memeber");
    });
    console.log(this.registration);
    this.r.navigate(['login']);
  }

  
}
