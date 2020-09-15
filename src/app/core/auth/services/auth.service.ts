import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { auth, User } from 'firebase/app';

import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  login(): Observable<auth.UserCredential> {
    return from(this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider()));
  }

  logout(): Observable<void> {
    return from(this.fireAuth.signOut()).pipe(tap(() => this.router.navigate(['introducao'])));
  }

  /**
   * Retorna as informações do Usuário atual
   */
  get user(): Observable<User> {
    return this.fireAuth.user;
  }
}
