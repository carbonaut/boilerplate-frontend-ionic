import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {

  constructor(private translateService: TranslateService) {
    this.addLangs(environment.availableLanguages);
    this.setDefaultLang(environment.availableLanguages[0]);
  }

  public init() {}

  public setDefaultLang(language: string) {
    this.translateService.setDefaultLang(language);
  }

  public addLangs(languagesList: string[]) {
    this.translateService.addLangs(languagesList);
  }

  public listenLanguageChangeEvent(): Observable<any> {
    return this.translateService.onLangChange;
  }

  public getInstantTranslation(key: string): string {
    return this.translateService.instant(key);
  }

  public setLanguage(lang: string) {
    this.translateService.use(lang);
  }

  public getLangs() {
    return this.translateService.getLangs();
  }
}
