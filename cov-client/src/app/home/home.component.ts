import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppHttpService } from '../common/app-http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  district: any;
  li: any;
  list: any;
  data: any;
  dist: any;
  public show: boolean = false;
  public buttonName: any = 'Show';
  constructor(private http: HttpClient,
    private httpservice: AppHttpService,
  ) {
    this.li = {};
    this.dist = new Object();
    this.district = "1";
  }

  ngOnInit(): void {
    this.httpservice.entries().subscribe((data) => {
      this.data = data.body;
      this.filter('bed');
    });
    this.http.get('https://corona.askbhunte.com/api/v1/data/nepal')
      .subscribe((response) => {
        this.li = response;
      })
    this.http.get('https://data.askbhunte.com/api/v1/districts')
      .subscribe((response) => {
        this.dist = response;
      })
    this.http.get('https://data.askbhunte.com/api/v1/districts/' + this.district)
      .subscribe((response) => {
        this.dist.title = response['title'];
        this.dist.title_ne = response['title_ne'];
        this.dist.covid_summary = response['covid_summary'];
        console.log(response);
      })
  }
  filter(type: string) {
    this.list = [];
    this.data.forEach(element => {
      if (element.requestfor === type) {
        this.list.push(element);
      }
    });
    if (this.list.length == 0) {
      this.list.push({ firstname: "N/A", lastname: "", requestfor: "N/A", urgency: "N/A", address: "N/A" });
    }
  }
  loadDatabyDistrict() {
    this.http.get('https://data.askbhunte.com/api/v1/districts/' + this.district)
      .subscribe((response) => {
        this.dist.title = response['title'];
        this.dist.title_ne = response['title_ne'];
        this.dist.covid_summary = response['covid_summary'];
        console.log(response);
      })
  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.

    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  toggleclose() {
    this.show = !this.show;
    this.buttonName = "Hide";
  }
}
