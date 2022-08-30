import { Injectable } from '@angular/core';
import { createStore, withProps } from '@ngneat/elf';
import { selectAllEntities, upsertEntities, withEntities } from '@ngneat/elf-entities';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
import { ExampleInterface } from './example.interface';

export interface ExampleState {
  metaInformation: boolean;
}

const initialState: ExampleState = {
  metaInformation: false,
};

const store = createStore(
  { name: 'examples' },
  withProps<ExampleState>(initialState),
  withEntities<ExampleInterface>()
);

export const persist = persistState(store, {
  key: 'examples',
  storage: localStorageStrategy,
});

@Injectable({ providedIn: 'root' })
export class ExampleRepository {
  examples$ = store.pipe(selectAllEntities());

  upsert(entities: ExampleInterface | ExampleInterface[]) {
    store.update(upsertEntities(entities));
  }
}
