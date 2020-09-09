import { Injectable } from '@angular/core';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { CanActivate, CanLoad, Route, UrlSegment } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard extends AngularFireAuthGuard implements CanActivate, CanLoad {
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return super.authState
      ? super.authState.pipe(
          take(1),
          map((authState) => authState && authState.uid && authState.providerData[0].providerId === 'google.com')
        )
      : false;
  }
}
