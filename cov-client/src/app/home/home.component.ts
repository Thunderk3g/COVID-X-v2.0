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
  data:any;
  constructor(private http : HttpClient,
            private httpservice : AppHttpService,
    ){

    this.li={};
}

  ngOnInit(): void {
    this.httpservice.entries().subscribe((data) => {
      this.data = data.body;
      console.log(data);
    });
    this.http.get('https://corona.askbhunte.com/api/v1/data/nepal')
    .subscribe((response) => {
      console.log(response)
      this.li=response;
    })
}
}
