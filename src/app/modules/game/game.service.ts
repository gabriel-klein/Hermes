// import { Injectable } from '@angular/core';
// import { RANKING_KEY, RealTimeDBService, Store, StoreService } from '@hermes/core';
// import { Partida } from '@hermes/models/partida';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root',
// })
// export class GameService extends StoreService<Partida> {
//   constructor(protected store: Store, private rtDB: RealTimeDBService<Partida>) {
//     super(store, 'partida');
//   }

//   setRanking(ranking: any): Observable<void> {
//     return this.store.set<any>(RANKING_KEY, this.store.createId(), ranking);
//   }

//   getRanking(): Observable<any> {
//     return this.store.getList(RANKING_KEY);
//   }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}
}