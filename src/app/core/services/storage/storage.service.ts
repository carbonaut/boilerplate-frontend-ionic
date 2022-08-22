import { Injectable } from '@angular/core';
import { enableAkitaProdMode, persistState } from '@datorama/akita';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  akitaStorage;

  init() {
    if (environment.production) {
      enableAkitaProdMode();
    }
    this.akitaStorage = persistState();
  }

  persistStorage() {
    if (!this.akitaStorage) {
      this.akitaStorage = persistState({
        key: 'BoilerplateStorage',
      });
    }
  }

  clearAll() {
    this.akitaStorage.clear();
  }
}
