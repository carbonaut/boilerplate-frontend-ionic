import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SessionApiService } from '../../api/session/session-api.service';
import { SessionRepository } from './session.repository';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private sessionRepository: SessionRepository, private sessionApiService: SessionApiService) {}

  login() {
    return this.sessionApiService.postLogin().pipe(
      tap((session) => {
        this.sessionRepository.update({ session });
      })
    );
  }

  logout() {
    return this.sessionApiService.postLogout().pipe(
      tap(() => {
        this.sessionRepository.update({ session: { accessToken: undefined, tokenType: undefined } });
      })
    );
  }
}
