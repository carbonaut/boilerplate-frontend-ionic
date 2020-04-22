import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SessionStore } from './session.store';
import { SessionApiService } from '../../services/session/session-api.service';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private sessionStore: SessionStore, private sessionApiService: SessionApiService) {}

  login() {
    return this.sessionApiService.postLogin().pipe(
      tap((session) => {
        this.sessionStore.login(session);
      })
    );
  }
}
