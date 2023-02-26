import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { canActivates } from './can-activate.guard';
import { DataComponent } from './data/data.component';
import { canActivatesChilds } from './can-activate-childs.guard';
import { canMatchTeam } from './canmatchs.guard';
import { MatchComponent } from './match/match.component';
import { CanDeactivates } from './deactivate.guard';

const routes: Routes = [
  { path: 'signup', component: SignupComponent, canActivate: [canActivates] },
  {
    path: 'login',
    component: LoginComponent,
    canActivateChild: [canActivatesChilds],
    children: [
      {
        path: 'child',
        component: DataComponent,
        canDeactivate:[CanDeactivates]
      },
    ],
  },
  {
    path: 'match',
    component: MatchComponent,
    canMatch: [canMatchTeam],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
