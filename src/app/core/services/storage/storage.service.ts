import { Injectable } from '@angular/core';
import { enableAkitaProdMode, persistState } from '@datorama/akita';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  akitaStorage;
  constructor() {
    if (environment.production) {
      enableAkitaProdMode();
    }
    this.akitaStorage = persistState();
  }

  clearAll() {
    this.akitaStorage.clear();
  }
}
