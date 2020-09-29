import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAuthenticatedUser$;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthenticatedUser$;
  }

  private get isAuthenticatedUser$(): Observable<boolean> {
    return this.authService.user$.pipe(
      take(1),
      map((authState) => authState && authState.uid && authState.providerData[0].providerId === 'google.com'),
      tap((canLoad) => {
        if (!canLoad) {
          this.router.navigate(['']);
          this.snackBar.open('É necessário estar autenticado para acessar essa área!', 'OK', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      })
    );
  }
}
