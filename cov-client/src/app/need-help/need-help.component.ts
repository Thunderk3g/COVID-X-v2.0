import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../common/app-http.service';
import { AuthService } from '../common/window/auth.service';

import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-need-help',
  templateUrl: './need-help.component.html',
  styleUrls: ['./need-help.component.scss']
})
export class NeedHelpComponent implements OnInit {
  entryForm: FormGroup;
  data: any;
  user:any;
  auth: AuthService;
  firstname: string;
  lastname :string;
  gender:string;
  address: string;
  urgency: string;
  email: string;
  requestfor: string;
  mobilenumber: string;
  constructor( auth:AuthService ,
          private httpservice : AppHttpService,
    ) {
      this.gender="";
      this.requestfor="";
      this.urgency="";
    }

  ngOnInit(): void {
    this.httpservice.entries().subscribe((data) => {
      this.data = data.body;
      console.log(data);
    });

  }
  sendEntry(){
    this.httpservice.get({
      firstname: this.firstname,
      lastname :this.lastname,
      address: this.address,
      urgency: this.urgency,
      gender:this.gender,
      email: this.email,
      requestfor: this.requestfor,
      mobilenumber: this.mobilenumber
    }).subscribe((data) => {
      this.data = data.body;
      console.log(data);
    });
}
}
