import { Injectable } from '@angular/core';

import { combineLatest, Observable } from 'rxjs';
import { concatMap, map, take } from 'rxjs/operators';

import { AuthService, RANKING_KEY, Store, StoreService } from '@hermes/core';
import { Ranking } from '@hermes/models/ranking';

@Injectable({
  providedIn: 'root',
})
export class RankingService extends StoreService<Ranking> {
  constructor(protected store: Store, private authSevice: AuthService) {
    super(store, RANKING_KEY);
  }

  setRanking(pontuacao: number): Observable<any> {
    return this.authSevice.user$.pipe(
      take(1),
      concatMap((user) => {
        const ranking: Ranking = {
          pontuacao,
          id: this.store.createId(),
          jogador: {
            id: user.uid,
            nome: user.displayName,
            photoURL: user.photoURL,
          },
        };

        return this.save(ranking);
      })
    );
  }

  getList(): Observable<Ranking[]> {
    const user$ = this.authSevice.user$.pipe(take(1));
    const rankingList$ = super
      .getList()
      .pipe(map((rankingList) => rankingList.sort((a, b) => b.pontuacao - a.pontuacao)));

    return combineLatest([user$, rankingList$]).pipe(
      map(([user, rankingList]) => {
        let list: Ranking[] = [];
        let melhorRankingUserIndex: number;
        let melhorRankingUser: Ranking;

        if (user) {
          melhorRankingUserIndex = rankingList.findIndex((r) => r.jogador.id === user.uid);
          melhorRankingUser = rankingList[melhorRankingUserIndex];
        }

        list = rankingList.slice(0, 5);

        list.map((ranking, index) => {
          ranking.posicao = index;
          return ranking;
        });

        if (melhorRankingUserIndex && melhorRankingUserIndex >= 5) {
          melhorRankingUser.posicao = melhorRankingUserIndex;
          list[4] = melhorRankingUser;
        }

        return list;
      })
    );
  }
}
