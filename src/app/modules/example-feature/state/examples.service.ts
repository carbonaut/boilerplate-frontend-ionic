import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ExampleInterface } from './example.interface';
import { ExampleRepository } from './examples.repository';

@Injectable({
  providedIn: 'root',
})
export class ExamplesService {
  constructor(private exampleRepository: ExampleRepository) {}

  loadExamples(): Observable<ExampleInterface[]> {
    // On a real service should call an API service method
    const example: ExampleInterface = { id: 1, label: 'example' };

    return of([example]).pipe(
      tap((response) => {
        // Upsert it in store
        this.exampleRepository.upsert(response);
      })
    );
  }
}
