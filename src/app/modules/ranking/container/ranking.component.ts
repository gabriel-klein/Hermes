import { Component, OnInit } from '@angular/core';
import { Ranking } from '@hermes/models/ranking';
import { Observable } from 'rxjs';
import { RankingService } from '../ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements OnInit {
  rankingList$: Observable<Ranking[]>;

  constructor(private rankingService: RankingService) {}

  ngOnInit(): void {
    this.rankingList$ = this.rankingService.getList();
  }
}
