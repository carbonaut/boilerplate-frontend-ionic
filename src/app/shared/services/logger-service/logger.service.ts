import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  public debug(payload: any): void {
    console.log('debug', payload);
  }

  public info(payload: any): void {
    console.log('info', payload);
  }

  public warning(payload: any): void {
    console.log('warning', payload);
  }

  public error(payload: any): void {
    console.log('error', payload);
  }

  public critical(payload: any): void {
    console.log('critical', payload);
  }
}
