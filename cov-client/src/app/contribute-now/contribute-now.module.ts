import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
// Form Module //
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';


@NgModule({
  imports: [
    CommonModule,
    AngularFireModule,
    BrowserModule,
    // Initialize Module
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // auth
    FormsModule

  ],
  exports:[
    AngularFireModule,
    AngularFireAuthModule, // auth
  ],
})
export class ContributeNowModule { }

