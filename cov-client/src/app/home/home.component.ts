import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppHttpService } from '../common/app-http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  district:any;
  li:any;
  list:any;
  data:any;
  dist:any;
  constructor(private http : HttpClient,
            private httpservice : AppHttpService,
    ){
    this.li={};
    this.dist={};
    this.district="";
}

  ngOnInit(): void {
    this.httpservice.entries().subscribe((data) => {
      this.data = data.body;
      this.filter('bed');
    });
    this.http.get('https://corona.askbhunte.com/api/v1/data/nepal')
    .subscribe((response) => {
      this.li=response;
    })
    this.http.get('https://data.askbhunte.com/api/v1/districts')
    .subscribe((response) => {
      this.dist=response;
    })
}
filter(type:string){
  this.list =[];
    this.data.forEach(element => {
      if(element.requestfor === type){
        this.list.push(element);
      }
    });
  if(this.list.length==0){
    this.list.push({firstname:"N/A" , lastname:"" , requestfor:"N/A" , urgency:"N/A" , address:"N/A"});
  }
  }
  loadDatabyDistrict(){
      this.http.get('https://data.askbhunte.com/api/v1/districts/'+this.district)
      .subscribe((response) => {
        this.dist=response;
        console.log(this.dist);
      })
  }
}
