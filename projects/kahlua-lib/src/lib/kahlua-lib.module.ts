import { NgModule } from '@angular/core';
import { KahluaLibComponent } from './kahlua-lib.component';
import { ListComponent } from './components/list/list.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card/card-header/card-header.component';
import { CardBodyComponent } from './components/card/card-body/card-body.component';

@NgModule({
  declarations: [KahluaLibComponent, ListComponent, CardComponent, CardHeaderComponent, CardBodyComponent],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [
    KahluaLibComponent,
    ListComponent,
    CardComponent, CardHeaderComponent, CardBodyComponent
  ]
})
export class KahluaLibModule { }
