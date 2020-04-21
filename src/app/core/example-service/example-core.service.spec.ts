import { TestBed } from '@angular/core/testing';

import { ExampleCoreService } from './example-core.service';

describe('ExampleCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleCoreService = TestBed.get(ExampleCoreService);
    expect(service).toBeTruthy();
  });
});
