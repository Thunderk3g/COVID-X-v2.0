import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

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
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {
    this.li = {};
   }

  ngOnInit(): void {
    this.authService.entries().subscribe((data) => {
      this.tokenStorage.saveToken(data.accessToken);
      this.list = [];
      this.list = data.body;
      console.log(this.list);
    });
  }
  update(data:any){
  //    data.isVerified=!data.isVerified;
      this.authService.updateEntry(data).subscribe((data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.ngOnInit();
      });
  }
}
