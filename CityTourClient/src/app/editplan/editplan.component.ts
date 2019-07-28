import { Component, OnInit } from '@angular/core';
import { BasicserviceService } from '../basicservice.service';
import { Location } from '../location';

export interface Locations{
  value : string;
  viewValue : string;
}
export interface Durations{
  value : number;
  viewValue : number;
 
}

@Component({
  selector: 'app-editplan',
  templateUrl: './editplan.component.html',
  styleUrls: ['./editplan.component.css']
})
export class EditplanComponent implements OnInit {
  message;
      selected = 'Temples';
      selected1 ;
   location:Locations[] = [
    {value: 'Monuments', viewValue: 'Monuments'},
    {value: 'Temples', viewValue: 'Temples'},
    {value: 'Shopping', viewValue: 'Shopping'}
  ];
  duration : Durations[] = [
    {value: 1, viewValue: 1 },
    {value: 2, viewValue: 2},
    {value: 3, viewValue: 3}

  ];
  
 modifiedtext:string;
  
  constructor(private ser: BasicserviceService, private loc : Location) { }
  City_Id:Number;
  City:String;
  Category:String;
  Places:String;
  Duration:String;
  SNO:Number;
  CITY:String;
  CATEGORY:String;
  PLACES:String;
  DURATION:String;

  msg;
  list = [];
  ngOnInit() {
  }

  
  onSelectedDuration(val:any)
  {

    this.ser.apiGet('selectbyduration?duration=' + val , (resp) => {
      console.log(resp);
      if(resp != null)
      {
        //this.SNO =this.City_Id;
       // this.CITY=this.City;
        //this.CATEGORY=this.Category;
        //this.PLACES=this.Places;
        //this.DURATION=this.Duration;
        //this.modifiedtext=JSON.stringify(resp);
        this.list = resp;
        console.log(this.list);
       //this.list=resp;

      }
      
    })
}

updateList(sno:any) {
   
  console.log(sno);
  this.ser.apiGet('update?sno=' + sno.city_Id + '&city=' + sno.city + '&category=' + sno.category + '&places=' + sno.places + '&duration=' + sno.duration, (resp) => {
    console.log(resp);
    if(resp==true){
    alert("Data Updated Successfully");
    }
  })
}
delete(sno:any) {
  console.log("delete=====>"+sno);
  this.ser.apiGet('delete?sno=' + sno, (resp) => {
    console.log(resp);
    if(resp==true){
    alert("Data Deleted Successfully");
  }
})
}
  }
 
 /* edit()
  {
    this.message = "plan edited";
  }
  delete()
  {
    this.message ="Operation Delete completed";
  }*/




