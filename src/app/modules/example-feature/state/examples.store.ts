import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ExampleInterface } from '../example.interface';

export interface ExampleState extends EntityState<ExampleInterface> {
  metaInformation: boolean,
}

export function createInitialState() {
  return {
    metaInformation: false,
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'examples'
})
export class ExamplesStore extends EntityStore<ExampleState> {
  constructor() {
    super(createInitialState());
  }
}
