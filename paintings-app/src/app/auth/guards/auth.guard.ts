import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route8: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.authService.verifyAuth().pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['./auth/login']);
        }
      })
    );

    // if (this.authService.auth.id) {
    //   return true;
    // }
    // return false;
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
    return this.authService.verifyAuth().pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['./auth/login']);
        }
      })
    );;

    //   if (this.authService.auth.id) {
    //     return true;
    //   }
    //   return false;
  }
}
