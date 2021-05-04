import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppHttpService } from '../common/app-http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  li:any;
  list:any;
  data:any;
  constructor(private http : HttpClient,
            private httpservice : AppHttpService,
    ){
    this.li={};
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
}
