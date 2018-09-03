import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-system';
  username = localStorage.getItem('username');
  default = true;
  super  = false;
  group = false;
  normal = false;

  onLogin(userLogged: string) {
    this.default = false;
    this.super  = false;
    this.group = false;
    this.normal = false;
    switch (userLogged) {
        case 'default':
            this.default = true;
            break;
        case 'super':
            this.super = true;
            break;
        case 'group':
            this.group = true;
            break;
        case 'normal':
            this.normal = true;
            break;
    }
  }
}
