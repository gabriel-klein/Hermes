import { Component, Input } from '@angular/core';

import { Ranking } from '@hermes/models/ranking';

@Component({
  selector: 'app-ranking-item',
  templateUrl: './ranking-item.component.html',
  styleUrls: ['./ranking-item.component.scss'],
})
export class RankingItemComponent {
  @Input() ranking: Ranking;

  constructor() {}
}
