import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cat Listing', url: 'cats', icon: 'logo-octocat' },
    { title: 'Log out', url: 'folder/logout', icon: 'log-out' },
  ];
  constructor() {}
}
