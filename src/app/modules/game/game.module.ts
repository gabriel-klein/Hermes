import { NgModule } from '@angular/core';

import { SharedModule } from '@hermes/shared';
import { GameComponent } from './container/game.component';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  declarations: [GameComponent],
  imports: [SharedModule, GameRoutingModule],
})
export class GameModule {}
