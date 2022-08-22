import { Injectable } from '@angular/core';
import { EntityState, EntityStore, EntityUIStore, StoreConfig } from '@datorama/akita';
import { ExampleInterface } from './example.interface';

export type ExampleUI = {
  isOpen: boolean;
};

export interface ExampleState extends EntityState<ExampleInterface> {}
export interface ExampleUIState extends EntityState<ExampleUI> {}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({
  name: 'examples',
  idKey: 'id',
})
export class ExamplesStore extends EntityStore<ExampleState> {
  ui: EntityUIStore<ExampleUIState>;

  constructor() {
    super();
    this.createUIStore().setInitialEntityState({ isOpen: false });
  }
}
