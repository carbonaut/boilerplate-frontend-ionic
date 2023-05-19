import { createStore, select, withProps } from '@ngneat/elf';
import { Injectable } from '@angular/core';
import { Session } from './session.interface';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';

interface SessionState {
  session: Session | undefined;
}

const initialState: SessionState = {
  session: undefined,
};

const store = createStore({ name: 'session' }, withProps<SessionState>(initialState));

export const persist = persistState(store, {
  key: 'session',
  storage: localStorageStrategy,
});

@Injectable({ providedIn: 'root' })
export class SessionRepository {
  isLoggedIn$ = store.pipe(select((state) => state.session?.accessToken));

  session$ = store.pipe(select((state) => state.session));

  isLoggedIn(): boolean {
    return Boolean(store.getValue().session?.accessToken);
  }

  session(): Session | undefined {
    return store.getValue().session;
  }

  update(session: Partial<SessionState>) {
    store.update((state) => ({ ...state, ...session }));
  }
}
