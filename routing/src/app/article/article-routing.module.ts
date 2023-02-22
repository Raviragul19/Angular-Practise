 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';

const routes: Routes = [
  { path: '', component: AngularComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'react', component: ReactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
