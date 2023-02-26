import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { start,end } from './intial';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: () => start,
    multi: true
   },
   {provide:APP_INITIALIZER,
   useFactory: ()=>end,
   multi: true}
],


  bootstrap: [AppComponent]
})
export class AppModule { }


