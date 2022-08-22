import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ExamplesStore } from './examples.store';
import { ExampleInterface } from './example.interface';

@Injectable({
  providedIn: 'root',
})
export class ExamplesService {
  constructor(private examplesStore: ExamplesStore) {}

  loadExamples(): Observable<ExampleInterface[]> {
    // On a real service should call an API service method
    const example: ExampleInterface[] = [
      { id: 1, label: 'example' },
      { id: 2, label: 'another example' },
    ];

    return of(example).pipe(
      tap((response) => {
        this.examplesStore.set(response);
      })
    );
  }
}
