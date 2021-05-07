import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenStorageService } from '../services/token-storage.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-need-help',
  templateUrl: './need-help.component.html',
  styleUrls: ['./need-help.component.scss']
})
export class NeedHelpComponent implements OnInit {
  entryForm: FormGroup;
  data: any;
  user:any;
  firstname: string;
  lastname :string;
  gender:string;
  address: string;
  asdf: string;
  email: string;
  requestfor: string;
  mobilenumber: string;
  constructor(
          private authService: AuthService,
          private tokenStorage: TokenStorageService
    ) {
      this.gender="";
      this.requestfor="";
      this.asdf="";
    }

  ngOnInit(): void {
    this.authService.entries().subscribe((data) => {
      this.tokenStorage.saveToken(data.accessToken);
      this.data = data.body;
      console.log(data);
    });

  }
  sendEntry(){
    this.authService.get({
      firstname: this.firstname,
      lastname :this.lastname,
      address: this.address,
      urgency: this.asdf,
      gender:this.gender,
      email: this.email,
      requestfor: this.requestfor,
      mobilenumber: this.mobilenumber
    }).subscribe((data) => {
      this.tokenStorage.saveToken(data.accessToken);
      this.data = data.body;
      console.log(data);
    });
}
}
