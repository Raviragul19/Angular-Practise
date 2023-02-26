import { ActivatedRouteSnapshot, CanMatchFn, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
    export const canMatchTeam: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
      return true;
    };