import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { TranslationsService } from './core/services/translations-service/translations.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translationsService: TranslationsService, private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.translationsService.init();
      this.setMobileStarterAssets();
    });
  }

  async setMobileStarterAssets() {}
}
