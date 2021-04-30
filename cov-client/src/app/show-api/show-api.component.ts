import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-show-api',
  templateUrl: './show-api.component.html',
  styleUrls: ['./show-api.component.scss']
})
export class ShowApiComponent implements OnInit {

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
