import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroducaoComponent } from '@hermes/modules/introducao/container/introducao.component';

const routes: Routes = [
  {
    path: '',
    component: IntroducaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroducaoRoutingModule {}
