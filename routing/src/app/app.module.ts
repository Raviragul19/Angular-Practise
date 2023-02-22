import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelocomeComponent } from './welcome/welocome.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    WelocomeComponent,
    DepartmentDetailsComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
