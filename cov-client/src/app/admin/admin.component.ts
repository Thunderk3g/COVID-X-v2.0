import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../common/app-http.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  name:any;
  password: any;
  username: any;
  loginAdmin: boolean = false;
  data: any;

  constructor(private httpservice : AppHttpService) { }

  ngOnInit(): void {
  }
  adminLogin(){
    this.httpservice.adminLogin({
      username: this.username,
      password :this.password
    }).subscribe((data) => {
      console.log(data.body.status);

    });
}
}
