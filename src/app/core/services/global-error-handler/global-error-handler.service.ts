import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { LoggerService } from '../../../shared/services/logger-service/logger.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private injector: Injector) {}

  public handleError(err: any): void {
    if (environment.log.enabled) {
      const logService = this.injector.get(LoggerService);
      logService.critical(err.originalError || err);
    }

    throw err;
  }
}
