import { NgModule } from '@angular/core';

import { IntroducaoComponent } from '@hermes/modules/introducao/container/introducao.component';
import { SharedModule } from '@hermes/shared';
import { IntroducaoRoutingModule } from './introducao-routing.module';

@NgModule({
  declarations: [IntroducaoComponent],
  imports: [SharedModule,IntroducaoRoutingModule]
})
export class IntroducaoModule {}