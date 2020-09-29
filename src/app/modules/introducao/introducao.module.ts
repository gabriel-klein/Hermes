import { NgModule } from '@angular/core';

import { SharedModule } from '@hermes/shared';
import { IntroducaoComponent } from './container/introducao.component';
import { IntroducaoRoutingModule } from './introducao-routing.module';

@NgModule({
  declarations: [IntroducaoComponent],
  imports: [SharedModule, IntroducaoRoutingModule],
})
export class IntroducaoModule {}
