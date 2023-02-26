import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, RouterStateSnapshot } from '@angular/router';
export const canActivatesChilds: CanActivateChildFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return true;
    };
