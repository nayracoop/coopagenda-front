import { Component } from '@angular/core';
import * as queryString from 'query-string';
import * as uuid from 'uuid';

import { environment } from '../environments/environment';
import { AuthenticationService } from './auth/authentication.service';

import { TUser } from './data/entities';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
})
export class Header {
  public authUrl: string = '';
  public currentUser: TUser;

  constructor(private authenticationService: AuthenticationService) {
    this.currentUser = this.authenticationService.currentUserValue;
    this.authUrl = `https://github.com/login/oauth/authorize?${queryString.stringify(
      {
        client_id: environment.GITHUB_APP_ID || 'f811c60a9880278057ff',
        redirect_uri: `${
          environment.backendUrl || 'http://localhost:4000'
        }/auth/github/callback`,
        scope: 'user',
        state: uuid.v4(),
      }
    )}`;
  }

  handleLogout() {
    this.authenticationService.logout();
    this.currentUser = this.authenticationService.currentUserValue;
  }
}
