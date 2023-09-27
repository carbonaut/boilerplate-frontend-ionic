import { throwError, Observable } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

import { LoggerService } from '../../services/logger-service/logger.service';
import { SessionRepository } from '../../state/session/session.repository';
import { Session } from '../../state/session/session.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private loggerService: LoggerService,
    private sessionRepository: SessionRepository
  ) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isLoggedUser = this.sessionRepository.isLoggedIn();

    const session = this.sessionRepository.session();
    const requestModified = session && isLoggedUser ? this.addAuthenticationHeader(request, session) : request;

    return next.handle(requestModified).pipe(
      timeout(environment.api.maxWaiting),
      catchError((err) => {
        this.loggerService.error(err);
        return this.customErrorHandler(err);
      })
    );
  }

  private addAuthenticationHeader(request: HttpRequest<any>, session: Session): HttpRequest<any> {
    const tokenType = session?.tokenType ?? '';
    const accessToken = session?.accessToken ?? '';

    return request.clone({
      headers: request.headers.set(environment.api.authHeader, `${tokenType} ${accessToken}`),
    });
  }

  private customErrorHandler(error: any) {
    let errorMessage: string;

    if (error === 'ERROR_NO_INTERNET' || error === 'ERR_INTERNET_DISCONNECTED' || error.name === 'TimeoutError') {
      errorMessage = 'HTTP_ERRORS.NO_INTERNET_CONNECTION';
    } else {
      errorMessage =
        error && error.error && error.error.message ? error.error.message : 'HTTP_ERRORS.DEFAULT_MESSAGE';
    }

    return throwError(() => ({ message: errorMessage, original: error }));
  }
}
