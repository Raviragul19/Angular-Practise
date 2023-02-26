import { ActivatedRouteSnapshot,CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
export const CanDeactivates:  CanDeactivateFn =
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return true;
};