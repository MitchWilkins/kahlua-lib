import { TestBed } from '@angular/core/testing';

import { KahluaLibService } from './kahlua-lib.service';

describe('KahluaLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KahluaLibService = TestBed.get(KahluaLibService);
    expect(service).toBeTruthy();
  });
});
