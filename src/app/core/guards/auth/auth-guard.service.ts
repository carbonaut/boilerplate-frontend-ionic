import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionQuery } from '../../state/session/session.query';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  // eslint-disable-next-line no-unused-vars
  constructor(public router: Router, public sessionQuery: SessionQuery) {}

  canActivate(): boolean {
    return this.isLoggedIn();
  }

  isLoggedIn(): boolean {
    if (!this.sessionQuery.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
