import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { LoggerService } from '../../../shared/services/logger-service/logger.service';
import { SessionQuery } from '../../state/session/session.query';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptor implements HttpInterceptor {
  constructor(private loggerService: LoggerService, private sessionQuery: SessionQuery) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isLoggedUser = this.sessionQuery.isLoggedIn();
    const { accessToken, tokenType } = this.sessionQuery.session();

    const requestModified = isLoggedUser
      ? this.addAuthenticationHeader(request, tokenType, accessToken)
      : request;

    return next.handle(requestModified).pipe(
      timeout(environment.api.maxWaiting),
      catchError(err => {
        this.loggerService.error(err);
        return this.customErrorHandler(err);
      })
    );
  }

  private addAuthenticationHeader(
    request: HttpRequest<any>,
    tokenType: string,
    accessToken: string
  ): HttpRequest<any> {
    return request.clone({
      headers: request.headers.set(environment.api.authHeader, `${tokenType} ${accessToken}`),
    });
  }

  private customErrorHandler(error: any) {
    let errorMessage: string;

    if (
      error === 'ERROR_NO_INTERNET' ||
      error === 'ERR_INTERNET_DISCONNECTED' ||
      error.name === 'TimeoutError'
    ) {
      errorMessage = 'HTTP_ERRORS.NO_INTERNET_CONNECTION';
    } else {
      errorMessage =
        error && error.error && error.error.message
          ? error.error.message
          : 'HTTP_ERRORS.DEFAULT_MESSAGE';
    }

    return observableThrowError({ message: errorMessage, original: error });
  }
}
