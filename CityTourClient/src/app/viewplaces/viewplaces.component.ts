import { Component, OnInit } from '@angular/core';
import { BasicserviceService } from '../basicservice.service';
import { Location } from '../location';

export interface Places{
  value : string;
  viewValue : string;
}
@Component({
  selector: 'app-viewplaces',
  templateUrl: './viewplaces.component.html',
  styleUrls: ['./viewplaces.component.css']
})
export class ViewplacesComponent implements OnInit {
  selected;
     
  location:Places[] = [
   {value: 'Delhi', viewValue: 'Delhi'},
   {value: 'Bangalore', viewValue: 'Bangalore'},
   {value: 'Mumbai', viewValue: 'Mumbai'},
   {value: 'Jaipur', viewValue: 'Jaipur'}
  
 ];
 
  modifiedtext:string;
  constructor(private ser: BasicserviceService, private loc : Location) { }
  list = [];  

  ngOnInit() {
  }
  onSelectedCity(val:any)
  {
    this.ser.apiGet('selectbycity?city=' + val , (resp) => {
      console.log(resp);
      if(resp != null)
      {
        //this.modifiedtext=JSON.stringify(resp);
        this.list = resp;
      }
    })
  }
  // display(val:any)
  // {
  //     this.modifiedtext="the selected city is"+val;
  //  }

  }
