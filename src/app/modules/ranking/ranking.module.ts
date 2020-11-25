import { NgModule } from '@angular/core';

import { SharedModule } from '@hermes/shared';

import { RankingItemComponent } from './components/ranking-item/ranking-item.component';
import { RankingComponent } from './container/ranking.component';
import { RankingRoutingModule } from './ranking-routing.module';

@NgModule({
  declarations: [RankingComponent, RankingItemComponent],
  imports: [SharedModule, RankingRoutingModule],
})
export class RankingModule {}
