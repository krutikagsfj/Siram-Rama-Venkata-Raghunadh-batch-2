import { Component, OnInit } from '@angular/core';
import { MobileservService } from '../mobileserv.service';

export class MobilePhn{
  "mobileid":number;
  "mobName":string;
  "mobPrice":number;
  constructor(mobileid:number,mobName:string,mobPrice:number)
  {
      this.mobileid=mobileid;
      this.mobName=mobName;
      this.mobPrice=mobPrice;
  }
}

@Component({
  selector: 'app-mobilecom',
  templateUrl: './mobilecom.component.html',
  styleUrls: ['./mobilecom.component.css']
})


export class MobilecomComponent implements OnInit {

  mobiles:Array<MobilePhn>=[];
  constructor(private serv:MobileservService) { }

  deleterow(row)
  {
   const index=this.mobiles.indexOf(row);
   this.mobiles.splice(index,1);
  }

  ngOnInit() {
    this.serv.getmobile().subscribe(data =>     //subscribed to the particular MobileServService and recieve the needed data from the json file
      {
        this.mobiles=data;
        console.log(this.mobiles);
      }),error=>{
        console.log(error);
      }
  }
  mobtype: string = "mobileid";
  order: boolean = true;
  sortrow(mobtype: string) {
    if (this.mobtype == mobtype) {
      this.order = !this.order;
    } else {
      this.order = true;
      this.mobtype = mobtype;
    }
  }

}
