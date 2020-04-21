import { TestBed } from '@angular/core/testing';

import { CustomTranslationsLoaderService } from './custom-translations-loader.service';

describe('CustomTranslationsLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomTranslationsLoaderService = TestBed.get(CustomTranslationsLoaderService);
    expect(service).toBeTruthy();
  });
});
