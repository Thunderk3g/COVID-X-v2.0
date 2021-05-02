import { Component, OnInit } from '@angular/core';
import { AuthService} from '../common/window/auth.service';
@Component({
  selector: 'app-need-help',
  templateUrl: './need-help.component.html',
  styleUrls: ['./need-help.component.scss']
})
export class NeedHelpComponent implements OnInit {
  auth: AuthService
  constructor( auth:AuthService ) { }

  ngOnInit(): void {
  }

}
