import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {

  constructor(private translateService: TranslateService) {
    translateService.addLangs(environment.availableLanguages);
    translateService.setDefaultLang(environment.availableLanguages[0]);
  }

  public getInstantTranslation(key: string): string {
    return this.translateService.instant(key);
  }

  public setLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
