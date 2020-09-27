import { NgModule } from '@angular/core';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './container/game.component';
import { SharedModule } from '@hermes/shared';


@NgModule({
  declarations: [GameComponent],
  imports: [
    GameRoutingModule,
    SharedModule
  ]
})
export class GameModule { }
