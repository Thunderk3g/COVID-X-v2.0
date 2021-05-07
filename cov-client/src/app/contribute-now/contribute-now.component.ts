import { Component, OnInit ,AfterViewInit} from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { WindowService } from '../common/window/window.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { AuthService } from '../services/auth.service';

import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contribute-now',
  templateUrl: './contribute-now.component.html',
  styleUrls: ['./contribute-now.component.scss']
})
export class ContributeNowComponent implements OnInit,AfterViewInit{

  user: any;

  windowRef: any;
  li:any;

  /* Contribute-Now Variable Details */
entryContributed: boolean = false;
captchaBoolean: boolean = false;
contributeForm: FormGroup;
data: any;
fullname: string;
address: string;
mobilenumber: string;
email: string;
interestedfield: string;
  firebaseConfig = {
    apiKey: 'AIzaSyALuXsjDCnpBd3-QEdR7l5gIYmDoMegsIE',
    authDomain: 'covid-x-90730.firebaseapp.com',
    projectId: 'covid-x-90730',
    storageBucket: 'covid-x-90730.appspot.com',
    messagingSenderId: '495488054603',
    appId: '1:495488054603:web:bdad03da5446dba65f64ce',
    measurementId: 'G-7E446KPX9M',
  };
  constructor(
      public afAuth: AngularFireAuth,
      private windowService : WindowService,
      private router: Router,
      private authService: AuthService,
      private tokenStorage: TokenStorageService
  ) {
    this.interestedfield="";
    firebase.initializeApp(this.firebaseConfig);
    this.windowRef = this.windowService.windowRef;
   }

   ngOnInit(): void{
    this.windowRef = this.windowService.windowRef;
   }

  ngAfterViewInit(){
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',
    {
      size:'normal',
      callback:(response) => {
        this.captchaBoolean =true;
      }
    });
    this.windowRef.recaptchaVerifier.render().then((widgetId: any) => {
      this.windowRef.recaptchaWidgetId = widgetId;
    });
  }
  contributeEntry(){
    this.authService.contribute({
      fullname: this.fullname,
      mobilenumber :this.mobilenumber,
      address: this.address,
      interestedfield: this.interestedfield,
      email:this.email
    }).subscribe((data) => {
      this.data = data.body;
      console.log("DATA PASYO PASYO");
      this.entryContributed = true;

    });
}
}
