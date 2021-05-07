import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  form: any = {};

  isLoggedIn = false;

  isLoginFailed = false;

  errorMessage = '';

  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;

      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);

        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;

        this.isLoggedIn = true;

        this.roles = this.tokenStorage.getUser().roles;

        this.reloadPage();
      },

      (err) => {
        this.errorMessage = err.error.message;

        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
