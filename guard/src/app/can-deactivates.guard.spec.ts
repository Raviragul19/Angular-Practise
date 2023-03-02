import { TestBed } from '@angular/core/testing';

import { CanDeactivatesGuard } from './can-deactivates.guard';

describe('CanDeactivatesGuard', () => {
  let guard: CanDeactivatesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivatesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
