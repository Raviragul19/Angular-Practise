import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';


@NgModule({
  declarations: [
    AngularComponent,
    ReactComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
