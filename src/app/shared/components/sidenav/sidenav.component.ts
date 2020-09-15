import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'firebase';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() appPages: { title: string; url: string }[];
  @Input() user: User;

  @Output() login = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();
}
