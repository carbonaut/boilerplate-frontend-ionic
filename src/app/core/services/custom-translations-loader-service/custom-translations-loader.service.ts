import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class CustomTranslationsLoaderService implements TranslateLoader {
  constructor(private http: HttpClient) {}

  public getTranslation(lang: string) {
    return this.http.get(`./assets/i18n/${lang}.json`);
  }
}
