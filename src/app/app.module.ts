import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KahluaLibModule } from '../../projects/kahlua-lib/src/lib/kahlua-lib.module';
import { KahluaCardModule } from '../../projects/kahlua-lib/src/lib/components/card/card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KahluaLibModule,
    KahluaCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
