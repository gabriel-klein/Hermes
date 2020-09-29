import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'Introdução',
      url: '/introducao',
    },
     {
       title: 'Game',
       url: '/game',
     },
  ];

  user$: Observable<firebase.User>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.authService.user;
  }

  login(): void {
    this.authService.login().subscribe();
  }

  logout(): void {
    this.authService.logout().subscribe();
  }

}
