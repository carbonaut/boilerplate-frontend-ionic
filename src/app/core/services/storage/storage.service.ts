import { Injectable } from '@angular/core';
import { enableAkitaProdMode, persistState } from '@datorama/akita';
import { Storage } from '@ionic/storage';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  akitaStorage;
  constructor(private storage: Storage) {
    if (environment.production) {
      enableAkitaProdMode();
    }
    this.akitaStorage = persistState();
  }

  clearAll() {
    this.akitaStorage.clear();
    return this.storage.clear();
  }
}
