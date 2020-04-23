import { TestBed } from '@angular/core/testing';

import { SessionApiService } from './session-api.service';

describe('SessionApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionApiService = TestBed.get(SessionApiService);
    expect(service).toBeTruthy();
  });
});
