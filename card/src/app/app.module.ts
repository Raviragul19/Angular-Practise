import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookstatuscardComponent } from './bookstatuscard/bookstatuscard.component';
@NgModule({
  declarations: [
    AppComponent,
    BookstatuscardComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
