import { NgModule } from '@angular/core';
import { redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@hermes/core';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToGame = () => redirectLoggedInTo(['/game']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'introducao',
    pathMatch: 'full',
  },
  {
    path: 'introducao',
    loadChildren: () => import('./modules/introducao/introducao-routing.module').then((m) => m.IntroducaoRoutingModule),
  },
  // {
  //   path: 'game',
  //   loadChildren: ,
  //   canActivate: [AuthGuard],
  //   canLoad: [AuthGuard],
  //   data: { data: { authGuardPipe: redirectUnauthorizedToHome } }
  // }
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
