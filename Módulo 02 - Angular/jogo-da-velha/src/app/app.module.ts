import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TiTacToeComponent } from './ti-tac-toe/ti-tac-toe.component';

@NgModule({
  declarations: [
    AppComponent,
    TiTacToeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
