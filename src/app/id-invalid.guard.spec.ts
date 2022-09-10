import { TestBed } from '@angular/core/testing';

import { IdInvalidGuard } from './id-invalid.guard';

describe('IdInvalidGuard', () => {
  let guard: IdInvalidGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IdInvalidGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
