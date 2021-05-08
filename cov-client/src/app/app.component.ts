import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'cov-client';
  tokenStorageService: any;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  constructor(
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (document.getElementById('main') != null) {
          document.getElementById('main').remove();
        }
        const node = document.createElement('script');
        node.src = 'assets/js/main.js';
        node.type = 'text/javascript';
        node.async = false;
        node.id = 'main';
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    });
  }

}
