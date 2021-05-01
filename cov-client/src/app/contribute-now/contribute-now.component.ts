import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribute-now',
  templateUrl: './contribute-now.component.html',
  styleUrls: ['./contribute-now.component.scss']
})
export class ContributeNowComponent implements OnInit {
  phoneNumber:string;
  otp:string;
  constructor() { }

  ngOnInit(): void {
  }

}
