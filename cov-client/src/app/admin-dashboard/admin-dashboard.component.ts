import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../common/app-http.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  name:any;
  data: any;
  li:any;
  list: any[];
  constructor(
    private httpservice: AppHttpService,
  ) {
    this.li = {};
   }

  ngOnInit(): void {
    this.httpservice.entries().subscribe((data) => {
      this.list = [];
      this.list = data.body;
      console.log(this.list);
    });
  }
  update(data:any){
  //    data.isVerified=!data.isVerified;
      this.httpservice.updateEntry(data).subscribe((data) => {
        this.ngOnInit();
      });
  }
}
