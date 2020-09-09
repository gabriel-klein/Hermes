import { Inject, Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { RealTimeDB } from '../classes/real-time-db';

@Injectable({
  providedIn: 'root',
})
export class RealTimeDBService<T extends { id: string }> {
  loading$ = new BehaviorSubject<boolean>(false);

  constructor(protected realTimeDB: RealTimeDB, @Inject(String) protected key: string) {}

  getList(): Observable<T[]> {
    this.loading$.next(true);
    return this.realTimeDB.getList<T>(this.key).pipe(finalize(() => this.loading$.next(false)));
  }

  get(id: string): Observable<T> {
    this.loading$.next(true);
    return this.realTimeDB.get<T>(this.key, id).pipe(finalize(() => this.loading$.next(false)));
  }

  save(data: T): Observable<any> {
    this.loading$.next(true);

    if (!data.id) {
      data.id = this.realTimeDB.createId();
    }

    return this.realTimeDB.set<T>(this.key, data.id, data).pipe(finalize(() => this.loading$.next(false)));
  }

  push(data: T): Observable<any> {
    this.loading$.next(true);
    data.id = this.realTimeDB.createId();

    return this.realTimeDB.push<T>(this.key, data).pipe(finalize(() => this.loading$.next(false)));
  }

  update(data: Partial<T>): Observable<any> {
    this.loading$.next(true);
    return this.realTimeDB.update<T>(this.key, data.id, data).pipe(finalize(() => this.loading$.next(false)));
  }

  remove(id: string): Observable<any> {
    this.loading$.next(true);
    return this.realTimeDB.remove(this.key, id).pipe(finalize(() => this.loading$.next(false)));
  }
}
