import { Inject, Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { finalize } from 'rxjs/operators';
import { Store } from '../classes/store';

@Injectable({
  providedIn: 'root',
})
export class StoreService<T extends { id: string }> {
  loading$ = new BehaviorSubject<boolean>(false);

  constructor(protected store: Store, @Inject(String) protected key: string) {}

  getList(): Observable<T[]> {
    this.loading$.next(true);
    return this.store.getList<T>(this.key).pipe(finalize(() => this.loading$.next(false)));
  }

  get(id: string): Observable<T> {
    this.loading$.next(true);
    return this.store.get<T>(this.key, id).pipe(finalize(() => this.loading$.next(false)));
  }

  save(data: T): Observable<any> {
    this.loading$.next(true);

    if (!data.id) {
      data.id = this.store.createId();
    }

    return this.store.set<T>(this.key, data.id, data).pipe(finalize(() => this.loading$.next(false)));
  }

  update(data: Partial<T>): Observable<any> {
    this.loading$.next(true);
    return this.store.update<T>(this.key, data.id, data).pipe(finalize(() => this.loading$.next(false)));
  }

  delete(id: string): Observable<any> {
    this.loading$.next(true);
    return this.store.delete(this.key, id).pipe(finalize(() => this.loading$.next(false)));
  }
}
