import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  li:any;
  constructor(private http : HttpClient){
    this.li={};
}

  ngOnInit(): void {
    this.http.get('https://corona.askbhunte.com/api/v1/data/nepal')
    .subscribe((response) => {
      console.log(response)
      this.li=response;
    })
}
}
