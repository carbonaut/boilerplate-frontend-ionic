import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { Session } from './session.interface';
import { SessionStore, SessionState } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<SessionState> {
  isLoggedIn$ = this.select((state) => toBoolean(state.session.accessToken));

  session$ = this.select((state) => state.session);

  constructor(protected store: SessionStore) {
    super(store);
  }

  isLoggedIn(): boolean {
    return toBoolean(this.getValue().session.accessToken);
  }

  session(): Session {
    return this.getValue().session;
  }
}
