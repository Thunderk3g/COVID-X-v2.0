import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { WindowService } from '../common/window/window.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-contribute-now',
  templateUrl: './contribute-now.component.html',
  styleUrls: ['./contribute-now.component.scss']
})
export class ContributeNowComponent implements OnInit,AfterViewInit{
  provider = new firebase.auth.GoogleAuthProvider();
  sentcode: boolean = false;
  googleSignedIn: boolean = false;
  phoneNumber:string;
  user: any;
  otp:string;
  windowRef: any;
  li:any;
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

  ) {

    firebase.initializeApp(this.firebaseConfig);
    this.windowRef = this.windowService.windowRef;
   }

   googleSignInViaPopup(){
    firebase.auth()
    .signInWithPopup(this.provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      this.li=user;
      this.googleSignedIn = true;
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

   }
   ngOnInit(){
    this.windowRef = this.windowService.windowRef;
   }

  ngAfterViewInit(){
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',
    {
      size:'normal',
      callback:(response) => {
        //TODO
      }
    });
    this.windowRef.recaptchaVerifier.render().then((widgetId: any) => {
      this.windowRef.recaptchaWidgetId = widgetId;
    });
  }
  sendOTP(){
     console.log(this.phoneNumber);
    const appVerifier = this.windowRef.recaptchaVerifier;

    firebase.auth().signInWithPhoneNumber(this.phoneNumber, appVerifier)
      .then(confirmationResult => {
        console.log(confirmationResult);
        this.windowRef.confirmationResult = confirmationResult;
        this.sentcode = true;
      })
      .catch(error => console.log(error));

  }
  verifyOTP() {
    this.windowRef.confirmationResult
      .confirm(this.otp)
      .then((userCredentials)=> console.log(userCredentials));
  }
  e164(phone: any) {
    const num = phone.country + phone.area + phone.prefix + phone.line
    return `+${num}`
  }
}
