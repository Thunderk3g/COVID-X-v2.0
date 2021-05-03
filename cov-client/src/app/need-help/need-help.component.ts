import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../common/app-http.service';
import { AuthService } from '../common/window/auth.service';
@Component({
  selector: 'app-need-help',
  templateUrl: './need-help.component.html',
  styleUrls: ['./need-help.component.scss']
})
export class NeedHelpComponent implements OnInit {
  data: any;
  auth: AuthService;
  constructor( auth:AuthService ,
          private httpservice : AppHttpService,
    ) { }

  ngOnInit(): void {
    this.httpservice.entries().subscribe((data) => {
      this.data = data.body;
      console.log(data);
    });
  }

}
