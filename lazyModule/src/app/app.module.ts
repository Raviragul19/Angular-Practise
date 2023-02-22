import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponentComponent,
    PagenotfoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
