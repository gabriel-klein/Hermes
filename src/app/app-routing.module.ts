import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@hermes/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'introducao',
    pathMatch: 'full',
  },
  {
    path: 'introducao',
    loadChildren: () => import('./modules/introducao/introducao.module').then((m) => m.IntroducaoModule),
  },
  {
    path: 'game',
    loadChildren: () => import('./modules/game/game.module').then((m) => m.GameModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'regras',
    loadChildren: () => import('./modules/regras/regras.module').then((m) => m.RegrasModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'ranking',
    loadChildren: () => import('./modules/ranking/ranking.module').then((m) => m.RankingModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
