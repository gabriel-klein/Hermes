import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { User } from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() appPages: { title: string; url: string }[];
  @Input() user: User;

  @Output() login = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();
  @Output() toogleSideNav = new EventEmitter<void>();
}
