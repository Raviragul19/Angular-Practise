import { TestBed } from '@angular/core/testing';

import { CanActivateChildsGuard } from './can-activate-childs.guard';

describe('CanActivateChildsGuard', () => {
  let guard: CanActivateChildsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateChildsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
