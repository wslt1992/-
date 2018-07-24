import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavComponent } from './nav/nav.component';
import { MyswiperComponent } from './myswiper/myswiper.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavComponent,
    MyswiperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
