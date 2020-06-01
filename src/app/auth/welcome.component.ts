import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: ``,
})
export class WelcomeComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.route.queryParams.subscribe((params) => {
      const { userId, admin, token, userAvatar, username } = params;
      const user = this.authService.login({
        id: userId,
        admin,
        token,
        avatar: userAvatar,
        username,
        provider: 'github',
        email: '',
      });
    });

    this.router.navigate(['/']);
  }
}
