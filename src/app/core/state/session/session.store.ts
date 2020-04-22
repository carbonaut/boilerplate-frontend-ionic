import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Session } from './session.interface';

export interface SessionState {
  session: Session;
}

export function createInitialState(): SessionState {
  return {
    session: {
      accessToken: undefined,
      tokenType: undefined,
    },
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }

  login(session: Session) {
    this.update({ session });
  }

  logout() {
    this.update(createInitialState());
  }
}
