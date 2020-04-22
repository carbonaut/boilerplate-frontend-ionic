import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Session } from '../../state/session/session.interface';

@Injectable({
  providedIn: 'root',
})
export class SessionApiService {
  postLogin(): Observable<Session> {
    return of({ accessToken: '123456', tokenType: 'Bearer' });
  }

  postLogout(): Observable<string> {
    return of('');
  }
}
