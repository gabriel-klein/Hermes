import { NgModule } from '@angular/core';

import { SharedModule } from '@hermes/shared';
import { RegrasComponent } from './container/regras.component';
import { RegrasRoutingModule } from './regras-routing.module';

@NgModule({
  declarations: [RegrasComponent],
  imports: [SharedModule, RegrasRoutingModule],
})
export class RegrasModule {}
