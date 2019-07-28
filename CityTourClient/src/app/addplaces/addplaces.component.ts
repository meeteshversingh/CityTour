import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BasicserviceService } from '../basicservice.service';
import { Location } from '../location';

@Component({
  selector: 'app-addplaces',
  templateUrl: './addplaces.component.html',
  styleUrls: ['./addplaces.component.css']
})
export class AddplacesComponent implements OnInit {

  constructor(private ser: BasicserviceService, private loc: Location) {
    this.loc = new Location();

  }

  sno = new FormControl('');
  city = new FormControl('');
  category = new FormControl('');
  places = new FormControl('');
  duration = new FormControl('');
  msg: Object;


  ngOnInit() { }

  addPlace() { 
    console.log("what the hell");
    this.ser.apiGet1('insert?sno=' + this.sno.value + '&city=' + this.city.value + '&category=' + this.category.value + '&places=' + this.places.value + '&duration=' + this.duration.value).subscribe(resp => {
      console.log(resp);
      this.msg = resp['o'];
    })
  }

}
