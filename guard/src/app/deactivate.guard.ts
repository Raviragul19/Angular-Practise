
import { ActivatedRouteSnapshot, CanDeactivateFn ,RouterStateSnapshot } from '@angular/router';
export  const CanDeactivates : CanDeactivateFn<unknown>=
  (component:unknown) => {
    return false;
  }
  
  