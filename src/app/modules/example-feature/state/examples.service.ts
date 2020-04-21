import { Injectable } from '@angular/core';
import { ExamplesStore } from './examples.store';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ExampleInterface } from './example.interface';

@Injectable({
  providedIn: 'root'
})
export class ExamplesService {

  constructor(
    private examplesStore: ExamplesStore, 
  ) {}


  loadExamples(): Observable<ExampleInterface[]> {
    // On a real service should call an API service method
    const example: ExampleInterface = { id: 1, label: 'example' };

    return of([example]).pipe(
      tap(response => {
        // Set it in store
        this.examplesStore.set(response);
      }),
    );
  }

}