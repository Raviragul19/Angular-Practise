import { TestBed } from '@angular/core/testing';

import { CanmatchsGuard } from './canmatchs.guard';

describe('CanmatchsGuard', () => {
  let guard: CanmatchsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanmatchsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
