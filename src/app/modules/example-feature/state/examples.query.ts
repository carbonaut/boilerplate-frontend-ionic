import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { ExampleState, ExamplesStore } from './examples.store';
import { ExampleInterface } from './example.interface';

@Injectable({
  providedIn: 'root'
})
export class ExamplesQuery extends QueryEntity<ExampleState> {
  constructor(protected store: ExamplesStore) {
    super(store);
  }

  examples$: Observable<ExampleInterface[]> = this.selectAll();
}