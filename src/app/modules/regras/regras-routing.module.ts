import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegrasComponent } from './container/regras.component';

const routes: Routes = [
  {
    path: '',
    component: RegrasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegrasRoutingModule {}
