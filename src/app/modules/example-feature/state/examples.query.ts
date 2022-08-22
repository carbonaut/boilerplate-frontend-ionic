import { Injectable } from '@angular/core';
import { EntityUIQuery, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { ExampleState, ExamplesStore, ExampleUIState, ExampleUI } from './examples.store';
import { ExampleInterface } from './example.interface';

@Injectable({
  providedIn: 'root',
})
export class ExamplesQuery extends QueryEntity<ExampleState> {
  public ui: EntityUIQuery<ExampleUIState, ExampleUI>;

  examples$: Observable<ExampleInterface[]> = this.selectAll();

  constructor(protected store: ExamplesStore) {
    super(store);
    this.createUIQuery();
  }

  public turnOnOpen() {
    this.store.ui.update(1, (resourceUI) => {
      return {
        ...resourceUI,
        isOpen: true,
      };
    });
  }

  public turnOffOpen() {
    this.store.ui.update(1, (resourceUI) => {
      return {
        ...resourceUI,
        isOpen: false,
      };
    });
  }
}
